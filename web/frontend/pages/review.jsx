import { Badge, LegacyCard, LegacyTabs, Page } from '@shopify/polaris';
import { useState, useCallback } from 'react';
// import DataTableFiltersExample from '../components/FilterWithTable.jsx'
// import DataTableFiltersExample from '../components/FilterWithTable.jsx';
import FilterWithTable from '../components/FilterWithTable.jsx';
import customerReviews from '../assets/dummy_review.js';

export default function TabsExample() {
  const [selected, setSelected] = useState(0);
  const [review, setReview] = useState(customerReviews)

  console.log(review)

  const handleTabChange = useCallback(
    (selectedTabIndex, number) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [ 
    {
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All review',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Published',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'repeat-customers-1',
      content: 'Unpublished',
      panelID: 'repeat-customers-content-1',
    },
  ];

  return (
    <section className="review_page">
      <Page
        title="Reviews"
        subtitle="Manage and moderate your review content"
        compactTitle
        actionGroups={[
          {
            title: 'Action',
            actions: [
              {
                content: 'Import Review',
                onAction: () => alert('Import Review'),
              },
              {
                content: 'Export Review',
                onAction: () => alert('Export Review'),
              },
            ],
          },
        ]}
      >
        <LegacyCard>
          <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <FilterWithTable Review={review}/>
          </LegacyTabs>
        </LegacyCard>
      </Page>
    </section>
  );
}