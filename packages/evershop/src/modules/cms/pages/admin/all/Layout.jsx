import React from 'react';
import Area from '@components/common/Area';
import './Layout.scss';
import './tailwind.scss';

export default function AdminLayout() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="header">
        <Area id="header" noOuter />
      </div>
      <div className="content-wrapper">
        <div className="admin-navigation">
          <Area id="adminNavigation" noOuter />
        </div>
        <div className="main-content">
          <Area id="content" className="main-content-inner" />
          <div className="footer">
            <div className="copyright flex flex-row gap-1">
              <span>Copyright © { currentYear } AV CMS</span>
              <span>(Version 1.0)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const layout = {
  areaId: 'body',
  sortOrder: 10
};
