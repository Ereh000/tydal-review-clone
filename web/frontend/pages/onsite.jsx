import { Button, ChoiceList, Grid, LegacyCard, Page, } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import '../assets/main.css'
// import {ArrowDownIcon} from '@shopify/polaris-icons';


const onsite = () => {
    const [selected, setSelected] = useState(['hidden']);
    const handleChange = useCallback((value) => setSelected(value), []);

    return (
        <section className="onsite_page">
            <Page
                title="Onsite Display"
                subtitle="Manage and customize your onsite widget"
            >
                <div className="remove_branding">
                    <LegacyCard title="Remove Tydal branding for FREE by verifying your store 🎉" sectioned>
                        <p>(Takes less than 30 seconds)</p>
                        <Button>Remove Branding</Button>
                    </LegacyCard>
                </div>

                <Grid>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
                        <div className="nav-settings">
                            <LegacyCard title="Product Page Widget" sectioned>
                                <ChoiceList
                                    title="Widget Status"
                                    choices={[
                                        { label: 'Active', value: 'active' },
                                        { label: 'Deactive', value: 'deactive' },
                                    ]}
                                    selected={selected}
                                    onChange={handleChange}
                                />
                            </LegacyCard>
                        </div>
                    </Grid.Cell>

                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 8, xl: 8 }}>
                        <LegacyCard title="Orders" sectioned>
                            <p>View a summary of your online store’s orders.</p>
                        </LegacyCard>
                    </Grid.Cell>
                </Grid>

            </Page>
        </section>
    )
}

export default onsite