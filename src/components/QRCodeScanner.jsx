import { QRCodeSVG } from 'qrcode.react';
import { Share2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function QRGenerator() {
  const [copied, setCopied] = useState(false);
  const menuUrl = window.location.origin + '/home';

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Restaurant Menu',
          text: 'Check out our menu and place your order!',
          url: menuUrl
        });
      } else {
        await copyToClipboard();
      }
    } catch (error) {
      console.error('Sharing failed:', error);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(menuUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Menu QR Code
        </h1>
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-300">
            <QRCodeSVG
              value={menuUrl}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
        </div>
        <p className="text-center text-gray-700 mb-4">
          Scan this code to view our menu and place orders
        </p>
        <div className="space-y-2">
          <button
            onClick={handleShare}
            className="flex items-center justify-center w-full gap-2 bg-yellow-400 text-gray-900 py-2 px-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
          >
            {copied ? (
              <>
                <Check size={20} />
                Copied!
              </>
            ) : (
              <>
                {navigator.share ? <Share2 size={20} /> : <Copy size={20} />}
                {navigator.share ? 'Share Menu Link' : 'Copy Menu Link'}
              </>
            )}
          </button>
          <p className="text-xs text-center text-gray-500">
            {navigator.share
              ? 'Share this menu with others'
              : 'Copy the menu link to share with others'}
          </p>
        </div>
      </div>
    </div>
  );
}
