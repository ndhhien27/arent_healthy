import React from 'react';

function BadgeIcon({ icon, badgeNumber }: { icon: string; badgeNumber?: number }) {
  return (
    <div className="relative">
      <img src={icon} alt="" className="h-6 mr-2" />
      {badgeNumber && (
        <div className="absolute top-0 right-0 -translate-y-1/3 w-4 h-4 bg-[#EA6C00] rounded-full flex items-center justify-center text-xs text-white">
          {badgeNumber}
        </div>
      )}
    </div>
  );
}

export default BadgeIcon;
