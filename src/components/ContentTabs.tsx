import React from 'react';
import { Button } from '@/components/ui/button';

type Tab = 'explanation' | 'code' | 'diagram';

interface ContentTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const ContentTabs: React.FC<ContentTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Button
        onClick={() => onTabChange('explanation')}
        variant={activeTab === 'explanation' ? 'default' : 'outline'}
        className="rounded-xl px-4 py-2"
      >
        Explanation
      </Button>
      <Button
        onClick={() => onTabChange('code')}
        variant={activeTab === 'code' ? 'default' : 'outline'}
        className="rounded-xl px-4 py-2"
      >
        Code
      </Button>
      <Button
        onClick={() => onTabChange('diagram')}
        variant={activeTab === 'diagram' ? 'default' : 'outline'}
        className="rounded-xl px-4 py-2"
      >
        Diagram
      </Button>
    </div>
  );
};

export default ContentTabs;