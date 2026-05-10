import React from 'react';
import { Button } from '@/components/ui/button';

type Tab = 'explanation' | 'code' | 'diagram';

const ContentTabs = ({ activeTab: Tab, onTabChange: (tab: Tab) => void }) => {
  return (
    <div className="flex items-center mb-4">
      <Button 
        onClick={() => onTabChange('explanation')}
        className={`bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 text-white ${
          activeTab === 'explanation' ? 'bg-blue-700' : ''
        }`}
      >
        Explanation
      </Button>
      <Button 
        onClick={() => onTabChange('code')}
        className={`bg-green-600 hover:bg-green-700 rounded-md px-4 py-2 text-white ${
          activeTab === 'code' ? 'bg-green-700' : ''
        }`}
      >
        Code
      </Button>
      <Button 
        onClick={() => onTabChange('diagram')}
        className={`bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2 text-white ${
          activeTab === 'diagram' ? 'bg-purple-700' : ''
        }`}
      >
        Diagram
      </Button>
    </div>
  );
};

export default ContentTabs;