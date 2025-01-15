import { ActionList, Button, CalloutCard, LegacyCard, Page, Popover } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import ReviewListCus from '../components/ReviewListCus'

const DisplayReview = () => {

    const [modelActive, setModelActive] = useState(false);

    // document.querySelector('.Polaris-Breadcrumbs__Breadcrumb').addEventListener('click', () => {
    //     setModelActive(false)
    // })

    return (
        <section className="onsite_page">
            {modelActive == false && (
                <Page
                    title="Display Review"
                >
                    <div>
                        {/* Review List Section */}
                        <CalloutCard
                            title="Review List"
                            illustration="https://audien.ai/assets/reviewList-49b4db49.png"
                            primaryAction={{
                                content: 'Customize',
                                // url: '#',
                                onAction: () => setModelActive(true),
                            }}
                        >
                            <p>Collect and showcase your customer reviews on your product page.</p>
                        </CalloutCard>

                        {/* Star rating (product page) */}
                        <CalloutCard
                            title="Star rating (Product page)"
                            illustration="https://audien.ai/assets/starRating-967663ae.png"
                            primaryAction={{
                                content: 'Customize',
                                url: '#',
                            }}
                        >
                            <p>Display product ratings as stars on Product page</p>
                        </CalloutCard>

                        {/* Star rating (Collection & Home page) */}
                        <CalloutCard
                            title="Star rating (Collection & Home page)"
                            illustration="https://audien.ai/assets/homeRating-be1525d7.png"
                            primaryAction={{
                                content: 'Customise',
                                url: '#',
                            }}
                        >
                            <p>Display product ratings as stars on Collection & Home page. Learn more</p>
                        </CalloutCard>

                        {/* Review popup */}
                        <CalloutCard
                            title="Review popup"
                            illustration="https://audien.ai/assets/reviewPopup-062ca548.png"
                            primaryAction={{
                                content: 'Customise',
                                url: '#',
                            }}
                        >
                            <p>A floating pop-up review that engages customers and drives sales chances. Learn more</p>
                        </CalloutCard>

                        {/* Card Carousel */}
                        <CalloutCard
                            title="Cards Carousel"
                            illustration="https://audien.ai/assets/carousel-54e7254c.png"
                            primaryAction={{
                                content: 'Add to theme',
                                url: '#',
                            }}
                            secondaryAction={{
                                content: 'View in store',
                                url: '#',
                            }}
                        >
                            <p>Place a container on any page that displays a series of reviews as a slideshow.</p>
                        </CalloutCard>
                    </div>

                </Page>
            )}

            {/* -  Model Page ----------- */}
            {/* <ReviewListCus /> */}
            <Page
                backAction={() => console.log('hiii')}
                title="Customize reviews list"
                primaryAction={<Button variant="primary">Save</Button>}
            >
                <ReviewListCus/>
            </Page>
        </section>
    )
}

export default DisplayReview