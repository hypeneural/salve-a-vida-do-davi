
import { useEffect, useState } from 'react';

interface ProgressBarProps {
  current: number;
  target: number;
  className?: string;
}

const ProgressBar = ({ current, target, className = '' }: ProgressBarProps) => {
  const [animatedCurrent, setAnimatedCurrent] = useState(0);
  const percentage = Math.min((current / target) * 100, 100);
  const animatedPercentage = Math.min((animatedCurrent / target) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCurrent(current);
    }, 500);

    return () => clearTimeout(timer);
  }, [current]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-3">
        <div className="text-center flex-1">
          <p className="text-sm text-gray-600 mb-1">Arrecadado</p>
          <p className="text-lg sm:text-xl font-bold text-davi-green-dark">
            {formatCurrency(animatedCurrent)}
          </p>
        </div>
        <div className="text-center flex-1">
          <p className="text-sm text-gray-600 mb-1">Meta</p>
          <p className="text-lg sm:text-xl font-bold text-davi-blue">
            {formatCurrency(target)}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-davi-green-light to-davi-blue rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
            style={{ width: `${animatedPercentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-white drop-shadow-md">
            {animatedPercentage.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-500">
          R$ 0
        </span>
        <span className="text-xs text-gray-500">
          {formatCurrency(target)}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
