import React from 'react'
import { Page, Badge, LegacyCard, Button, Grid } from '@shopify/polaris';
import '../assets/main.css';

const homePage = () => {
  return (
    <section classNameName="homepage">
      <Page
        subtitle="Here's what's happening with your reviews"
      >
        <LegacyCard className='hii' title="Credit card" sectioned>
          <p>Your widget is currently disabled. Ready to start building your reviews?</p>
          <Button size='medium'>View and Enable Reviews Widget</Button>
        </LegacyCard>

        <div className="Polaris-Page Polaris-Page--fullWidth">
          <div className="Polaris-Page__Content" style={{ padding: 0, paddingTop: "1rem" }}>
            <div className="Polaris-Grid">
              <div className="Polaris-Grid-Cell Polaris-Grid-Cell--cell_6ColumnXs Polaris-Grid-Cell--cell_3ColumnSm Polaris-Grid-Cell--cell_3ColumnMd Polaris-Grid-Cell--cell_3ColumnLg Polaris-Grid-Cell--cell_3ColumnXl">
                <div className="Polaris-LegacyCard">
                  <div className="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
                    <h2 className="Polaris-Text--root Polaris-Text--headingSm">Reviews Collected</h2>
                    <div class="stat-value">
                      <turbo-frame class="loads-with-spinner" data-turbo-frames-target="frame" id="dashboard_ratings_count" src="https://reviews.rivo.io/rev/dashboard/metrics?metric_type=ratings_count&amp;shop=hatake-broke.myshopify.com" complete="">
                        <p class="value">0</p>

                      </turbo-frame>         
                      </div>
                  </div>
                  <div className="Polaris-LegacyCard__Section Polaris-LegacyCard__LastSectionPadding">
                    {/* <p>0</p> */}
                  </div>
                </div>
              </div>
              <div className="Polaris-Grid-Cell Polaris-Grid-Cell--cell_6ColumnXs Polaris-Grid-Cell--cell_3ColumnSm Polaris-Grid-Cell--cell_3ColumnMd Polaris-Grid-Cell--cell_3ColumnLg Polaris-Grid-Cell--cell_3ColumnXl">
                <div className="Polaris-LegacyCard">
                  <div className="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
                    <h2 className="Polaris-Text--root Polaris-Text--headingSm">Orders</h2>
                  </div>
                  <div className="Polaris-LegacyCard__Section Polaris-LegacyCard__LastSectionPadding">
                    <p>View a summary of your online store’s orders.</p>
                  </div>
                </div>
              </div>
              <div className="Polaris-Grid-Cell Polaris-Grid-Cell--cell_6ColumnXs Polaris-Grid-Cell--cell_3ColumnSm Polaris-Grid-Cell--cell_3ColumnMd Polaris-Grid-Cell--cell_6ColumnLg Polaris-Grid-Cell--cell_6ColumnXl">
                <div className="Polaris-LegacyCard">
                  <div className="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
                    <h2 className="Polaris-Text--root Polaris-Text--headingSm">Orders</h2>
                  </div>
                  <div className="Polaris-LegacyCard__Section Polaris-LegacyCard__LastSectionPadding">
                    <p>View a summary of your online store’s orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </section>

  )
}

export default homePage