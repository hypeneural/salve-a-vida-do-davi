import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Pix } from "@/lib/pix";
import * as QRCode from "qrcode";
import { FiCopy, FiRefreshCw } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";

const PRESETS = [10, 20, 50, 100, 150, 200] as const;

interface DonationPixDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DonationPixDialog({ open, onOpenChange }: DonationPixDialogProps) {
  const [amount, setAmount] = useState<number | "">(10);
  const [brCode, setBrCode] = useState("");
  const [qr, setQr] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  // gera BR Code + QR
  const generate = async (value: number) => {
    setIsGenerating(true);
    try {
      const code = Pix.generate({
        key: "14189786985", // CPF sem pontuação
        name: "Davi Luiz Pellizzari Rodrigues",
        city: "CANELINHA",
        amount: value,
        txid: `DLPR${Date.now().toString(36).slice(-8)}`, // txid único ≤ 25 car.
      });
      setBrCode(code);
      const qrDataUrl = await QRCode.toDataURL(code, { 
        margin: 1, 
        width: 300,
        color: {
          dark: '#1a365d',
          light: '#ffffff'
        }
      });
      setQr(qrDataUrl);
    } catch (error) {
      toast({
        title: "Erro ao gerar PIX",
        description: "Tente novamente em alguns segundos.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreset = (v: number) => {
    setAmount(v);
    generate(v);
  };

  const handleCustom = () => {
    if (amount === "" || isNaN(Number(amount)) || Number(amount) <= 0) {
      toast({ 
        title: "Valor inválido", 
        description: "Por favor, insira um valor maior que zero.",
        variant: "destructive" 
      });
      return;
    }
    generate(Number(amount));
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brCode);
      toast({ 
        title: "Código copiado com sucesso! 🎉",
        description: "Cole o código no seu aplicativo de pagamento.",
      });
    } catch (error) {
      toast({
        title: "Erro ao copiar",
        description: "Tente selecionar e copiar manualmente.",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setBrCode("");
    setQr(null);
    setAmount(10);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-davi-blue/20 rounded-full flex items-center justify-center mb-2">
            <BsQrCode className="w-8 h-8 text-davi-blue" />
          </div>
          <DialogTitle className="text-2xl font-bold text-davi-green-dark">
            Doe via PIX 💝
          </DialogTitle>
          <p className="text-sm leading-snug text-gray-600">
            <strong>Davi Luiz Pellizzari Rodrigues</strong>
            <br />
            Cada doação nos aproxima da cura!
          </p>
        </DialogHeader>

        {/* Valores rápidos */}
        <div className="space-y-3">
          <h3 className="font-semibold text-davi-green-dark">Valores sugeridos:</h3>
          <div className="grid grid-cols-3 gap-3">
            {PRESETS.map((p) => (
              <Button
                key={p}
                variant={amount === p ? "default" : "outline"}
                onClick={() => handlePreset(p)}
                disabled={isGenerating}
                className={`transition-all ${amount === p 
                  ? "bg-davi-blue hover:bg-davi-blue/90 text-white" 
                  : "border-davi-blue/30 text-davi-blue hover:bg-davi-blue/10"
                }`}
              >
                R$ {p}
              </Button>
            ))}
          </div>
        </div>

        {/* Valor personalizado */}
        <div className="space-y-2">
          <label htmlFor="custom" className="text-sm font-semibold text-davi-green-dark">
            Valor personalizado
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
            <Input
              id="custom"
              type="number"
              step="0.01"
              min="1"
              placeholder="0,00"
              value={amount === "" ? "" : amount}
              onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
              className="pl-8 border-davi-green-light/30 focus:border-davi-blue"
              disabled={isGenerating}
            />
          </div>
          {amount !== "" && Number(amount) > 0 && Number(amount) !== 10 && Number(amount) !== 20 && Number(amount) !== 50 && Number(amount) !== 100 && Number(amount) !== 150 && Number(amount) !== 200 && (
            <Button
              onClick={handleCustom}
              disabled={isGenerating}
              variant="outline"
              className="w-full border-davi-blue text-davi-blue hover:bg-davi-blue hover:text-white"
            >
              Gerar PIX para R$ {Number(amount).toFixed(2)}
            </Button>
          )}
        </div>

        {/* BR Code & QR */}
        {brCode && (
          <div className="space-y-4 border-t pt-4">
            <div className="text-center">
              <p className="text-lg font-bold text-davi-green-dark mb-2">
                💰 Valor: R$ {Number(amount).toFixed(2)}
              </p>
              {qr && (
                <div className="bg-white p-4 rounded-lg border-2 border-davi-green-light/30 inline-block">
                  <img src={qr} alt="QR Code Pix" className="mx-auto w-48 h-48" />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-davi-green-dark">
                Código PIX Copia e Cola:
              </label>
              <Textarea
                readOnly
                value={brCode}
                rows={4}
                className="text-xs font-mono resize-none border-davi-green-light/30 bg-gray-50"
              />
            </div>
          </div>
        )}

        <DialogFooter className="gap-2 pt-4">
          {brCode ? (
            <div className="flex gap-2 w-full">
              <Button 
                onClick={copy} 
                className="flex-1 bg-davi-blue hover:bg-davi-blue/90 text-white"
              >
                <FiCopy className="mr-2" size={16} />
                Copiar código
              </Button>
              <Button 
                variant="outline" 
                onClick={resetForm}
                className="border-davi-green-light text-davi-green-dark hover:bg-davi-green-light/10"
              >
                <FiRefreshCw className="mr-1" size={16} />
                Novo
              </Button>
            </div>
          ) : (
            !isGenerating && amount !== "" && Number(amount) > 0 && (
              <Button 
                onClick={handleCustom} 
                className="w-full bg-davi-blue hover:bg-davi-blue/90 text-white"
                disabled={isGenerating}
              >
                <BsQrCode className="mr-2" size={16} />
                {isGenerating ? "Gerando..." : "Gerar PIX Copia e Cola"}
              </Button>
            )
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
