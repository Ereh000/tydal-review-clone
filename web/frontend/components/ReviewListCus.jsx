import { Button, ChoiceList, Grid, LegacyCard, Select } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import '../assets/main.css'

const ReviewListCus = () => {

    // Color Choicelist ----------------------
    const [selected, setSelected] = useState(['hidden']);
    const handleChange = useCallback((value) => setSelected(value), []);
    // Color Choicelist* ----------------------

    // write__review-stye select ---
    const [reviewStyle, setReveiwStyle] = useState('today');
    const handleSelectChange = useCallback(
        (value) => setSelected(setReveiwStyle),
        [],
    );
    const reviewStyleOptions = [
        { label: 'Two step', value: 'twoStep' },
        { label: 'Multi step', value: 'multistep' },
    ];
    // write__review-stye select* ---

    // default__storting select ---
    const [dafaultSort, setDefaultSorting] = useState('today');
    const handleDefaultSortingChange = useCallback(
        (value) => setSelected(setDefaultSorting),
        [],
    );
    const defaultSortingOptions = [
        { label: 'Featured', value: 'featured' },
        { label: 'Newest', value: 'newest' },
        { label: 'Highest Rating', value: 'highest_rating' },
        { label: 'Lowest Rating', value: 'lowest_rating' },
        { label: 'Picture First', value: 'picture_first' },
    ];
    // default__storting select* ---

    // ---
    // const widgetStyle = {
    //     reviewLayout: reviewLayout,
    // }
    // const [reviewLayout, setReviewLayout] = useState('grid')

    // const divStyle = {
    //     display: reviewLayout
    // }

    // ---

    return (
        <div className='customize_review-list' >
            <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <LegacyCard title="Appearance" sectioned>
                        <div className="layout-container">
                            <p className='text-bold'>Layout</p>
                            <div className="layout-wrap">
                                <div className="layout-bx">
                                    Grid
                                </div>
                                <div className="layout-bx">
                                    List
                                </div>
                            </div>
                        </div>

                        <div className="color" style={{ marginTop: '1rem' }}>
                            <ChoiceList
                                title="Color"
                                choices={[
                                    { label: 'Light', value: 'light' },
                                    { label: 'Dark', value: 'dark' },
                                ]}
                                selected={selected}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="write_review-style" style={{ marginTop: '1rem' }}>
                            <Select
                                label="Date range"
                                options={reviewStyleOptions}
                                onChange={handleSelectChange}
                                value={setReveiwStyle}
                            />
                        </div>
                        <div className="default__sorting" style={{ marginTop: '1rem' }}>
                            <Select
                                label="Default sorting"
                                options={defaultSortingOptions}
                                onChange={handleDefaultSortingChange}
                                value={setDefaultSorting}
                            />
                        </div>
                    </LegacyCard>
                </Grid.Cell>

                {/* Iframe Widget Preview */}

                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <div className="widget__preview-model">
                        <LegacyCard title="Orders" sectioned>
                            <div className="snipcss-xQAm4">
                                <div className="header--wrap--RC71Ua1">
                                    <div className="header--box--nyars_2">
                                        <div className="header--blockWrap1--cBFP5p9">
                                            <div className="header--block1--IubSBOk">
                                                <div className="header--num--GaAGwoZ">4.7</div>
                                                <div className="header--star--zQm5hXL">
                                                    <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-yVi2N" id="style-yVi2N"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-mDSLe" id="style-mDSLe"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-J7bFU" id="style-J7bFU"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-rM4wh" id="style-rM4wh"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starhalfreview  style-Hsd2y" id="style-Hsd2y"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.992v-0.021333l84.266667 184.32a53.333333 53.333333 0 0 0 41.6 30.72l181.952 23.68-131.882667 142.698666a53.333333 53.333333 0 0 0-13.290667 45.738667l33.792 185.642667-172.8-85.397334A53.333333 53.333333 0 0 0 512 726.826667V205.013333z m48.512-47.850667c-18.986667-41.557333-78.016-41.557333-97.024 0l-91.498667 200.170667-196.544 25.6c-42.922667 5.589333-61.653333 57.28-32.277333 89.088l142.293333 153.92-36.650666 201.258667c-7.872 43.136 36.778667 76.8 76.096 57.386666L512 792.064l187.093333 92.458667c39.296 19.413333 83.946667-14.229333 76.096-57.365334L738.56 625.92l142.272-153.92c29.376-31.786667 10.645333-83.498667-32.298667-89.088l-196.522666-25.6-91.52-200.170667z" />
                                                    </svg></span></div>
                                                </div>
                                                <div className="header--numText--PMO4egL">All from verified purchases</div>
                                            </div>
                                        </div>
                                        <div className="header--blockWrap2--xD99Jhz">
                                            <div className="header--block2--JYYBX6e">
                                                <div className="header--progressWrap--jDUADsT">
                                                    <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-n9f3x" id="style-n9f3x"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-sFzaI" id="style-sFzaI"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-A8OgR" id="style-A8OgR"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-W6Vvw" id="style-W6Vvw"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-QeHwD" id="style-QeHwD"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span></div>
                                                    <div className="header--progressBox--c43k8IF">
                                                        <div className="header--progressRate--dc7zrFv style-o4yKh" id="style-o4yKh" />
                                                    </div>
                                                    <div className="header--progressNum--s8fyONx">390</div>
                                                </div>
                                                <div className="header--progressWrap--jDUADsT">
                                                    <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-mBMyr" id="style-mBMyr"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-NWxLa" id="style-NWxLa"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-xZnwF" id="style-xZnwF"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-bsEaj" id="style-bsEaj"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-x8NPB" id="style-x8NPB"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span></div>
                                                    <div className="header--progressBox--c43k8IF">
                                                        <div className="header--progressRate--dc7zrFv style-YjaJC" id="style-YjaJC" />
                                                    </div>
                                                    <div className="header--progressNum--s8fyONx">41</div>
                                                </div>
                                                <div className="header--progressWrap--jDUADsT">
                                                    <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-drh4v" id="style-drh4v"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-qYR2a" id="style-qYR2a"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-6ozfe" id="style-6ozfe"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-MoRBa" id="style-MoRBa"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-GhlFt" id="style-GhlFt"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span></div>
                                                    <div className="header--progressBox--c43k8IF">
                                                        <div className="header--progressRate--dc7zrFv style-wwTpE" id="style-wwTpE" />
                                                    </div>
                                                    <div className="header--progressNum--s8fyONx">23</div>
                                                </div>
                                                <div className="header--progressWrap--jDUADsT">
                                                    <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-BRKRr" id="style-BRKRr"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-g5Cy7" id="style-g5Cy7"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-lO4rD" id="style-lO4rD"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-x7xCK" id="style-x7xCK"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-hmtXU" id="style-hmtXU"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span></div>
                                                    <div className="header--progressBox--c43k8IF">
                                                        <div className="header--progressRate--dc7zrFv style-WzTOn" id="style-WzTOn" />
                                                    </div>
                                                    <div className="header--progressNum--s8fyONx">3</div>
                                                </div>
                                                <div className="header--progressWrap--jDUADsT">
                                                    <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-oNoxm" id="style-oNoxm"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-T2Wio" id="style-T2Wio"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-JnAoj" id="style-JnAoj"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-gnJeF" id="style-gnJeF"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span><span className="comet-icon comet-icon-starreview  style-YtVoj" id="style-YtVoj"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                    </svg></span></div>
                                                    <div className="header--progressBox--c43k8IF">
                                                        <div className="header--progressRate--dc7zrFv style-9n4k7" id="style-9n4k7" />
                                                    </div>
                                                    <div className="header--progressNum--s8fyONx">21</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter--wrap--mOdou5_ style-tePUm" id="style-tePUm">
                                    <div>
                                        <div className="filter--filterItem--udTNLrr filter--active--JGzZ0BK">All(478)</div>
                                        <div className="filter--filterItem--udTNLrr">Pic review(99)</div>
                                        <div className="filter--filterItem--udTNLrr">Additional review(14)</div>
                                    </div>
                                </div>
                                <div className="filter--bottom--Buw5PFS"><button type="button" className="comet-v2-btn comet-v2-btn-link filter--sort--dQR5KRs comet-v2-btn-important"><span>Sort by default<span className="comet-icon comet-icon-chevrondown  style-1JZxH" id="style-1JZxH"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                    <path d="M296.256 354.922667l224 224 224-224a74.666667 74.666667 0 0 1 0 105.6l-197.589333 197.610666a37.333333 37.333333 0 0 1-52.8 0l-197.589334-197.610666a74.666667 74.666667 0 0 1 0-105.6z" />
                                </svg></span></span></button>
                                </div>
                                <div className="list--wrap--yFAThmi">
                                    <div className="list--box--rD0K2Xq">
                                        <div className="list--itemWrap--ARYTMbR">
                                            <div className="list--itemBox--IRynCHN">
                                                <div className="list--selectedReview--cyWZLLU style-dExkK" id="style-dExkK" />
                                                <div className="list--itemPhoto--ZgH4_cc"><img src="https://ae-pic-a1.aliexpress-media.com/kf/UT8HZyLXNNXXXagOFbXF.jpg_220x220.jpg_.webp" alt="" /></div>
                                                <div className="list--itemContent--onkwE7H">
                                                    <div>
                                                        <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-DOXOx" id="style-DOXOx"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-pBvfQ" id="style-pBvfQ"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-FWVOY" id="style-FWVOY"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-hkjXz" id="style-hkjXz"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-nkqoH" id="style-nkqoH"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span></div>
                                                        <div className="list--itemSku--uTW6t1g">Color:Black RAM:2G Bundle:Official Standard ROM:16g </div>
                                                        <div className="list--itemReview--xQUhO78">The delivery is very fast the mini smartphone and beautiful my son likes it very much. Thank you so much😊</div>
                                                        <div className="list--itemThumbnails--FPw0Ny9">
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/A317bde6159504ed38a759b57365c6137g.jpg_220x220.jpg_.webp" alt="" /></div>
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/A112219c4eaa8460a9c4a838ff0db5a75P.jpg_220x220.jpg_.webp" alt="" /></div>
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/A8b33f560eab543d0ac15c814e3ad7f9fX.jpg_220x220.jpg_.webp" alt="" /></div>
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/A1c7b1bad79a54b5d95965161866154033.jpg_220x220.jpg_.webp" alt="" /></div>
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/A9260f156320441abbd8cfd2168669283S.jpg_220x220.jpg_.webp" alt="" /></div>
                                                        </div>
                                                        <div className="list--itemThumbnails--FPw0Ny9" />
                                                    </div>
                                                    <div className="list--itemDesc--P6HS4zO">
                                                        <div className="list--itemInfo--URmp38d">B***e | 26 Oct 2024</div>
                                                        <div className="list--itemHelp--LkvM733"><span className="comet-icon comet-icon-like list--itemHelpIcon--iLyYPaI style-pMtdF" id="style-pMtdF"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M450.261333 169.28A74.666667 74.666667 0 0 1 517.034667 128H533.333333a74.666667 74.666667 0 0 1 74.666667 74.666667v170.666666a10.666667 10.666667 0 0 0 10.666667 10.666667h228.138666a74.666667 74.666667 0 0 1 73.92 85.226667l-51.818666 362.666666A74.666667 74.666667 0 0 1 794.986667 896H202.666667A74.666667 74.666667 0 0 1 128 821.333333v-362.666666A74.666667 74.666667 0 0 1 202.666667 384h133.632a10.666667 10.666667 0 0 0 9.536-5.888l104.426666-208.853333zM517.034667 192a10.666667 10.666667 0 0 0-9.536 5.888l-104.426667 208.853333A74.666667 74.666667 0 0 1 336.298667 448H202.666667a10.666667 10.666667 0 0 0-10.666667 10.666667v362.666666a10.666667 10.666667 0 0 0 10.666667 10.666667h592.32a10.666667 10.666667 0 0 0 10.56-9.173333l51.818666-362.666667a10.666667 10.666667 0 0 0-10.56-12.16H618.666667a74.666667 74.666667 0 0 1-74.666667-74.666667v-170.666666A10.666667 10.666667 0 0 0 533.333333 192h-16.298666z" />
                                                            <path d="M298.666667 768V512a64 64 0 0 1 64 64v192h-64z" />
                                                        </svg></span>&nbsp;<span className="list--itemHelpText--JHnJHcW">Helpful (0)</span>&nbsp;<span className="menu--wrap--KxIJ1AZ"><span className="comet-icon comet-icon-overflowmenuhorizontal  style-qYJE7" id="style-qYJE7"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M789.333333 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
                                                            <path d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
                                                            <path d="M234.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
                                                        </svg></span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list--itemWrap--ARYTMbR">
                                            <div className="list--itemBox--IRynCHN">
                                                <div className="list--selectedReview--cyWZLLU style-pdQcP" id="style-pdQcP" />
                                                <div className="list--itemPhoto--ZgH4_cc"><img src="https://ae-pic-a1.aliexpress-media.com/kf/A4172915f611046da85dece7776c2f1c2n.jpg_220x220.jpg_.webp" alt="" /></div>
                                                <div className="list--itemContent--onkwE7H">
                                                    <div>
                                                        <div className="stars--box--d_zcrGb"><span className="comet-icon comet-icon-starreviewfilled  style-azear" id="style-azear"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-mnmCI" id="style-mnmCI"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-MF9Ds" id="style-MF9Ds"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-cp8ml" id="style-cp8ml"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span><span className="comet-icon comet-icon-starreviewfilled  style-XYZZo" id="style-XYZZo"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z" />
                                                        </svg></span></div>
                                                        <div className="list--itemSku--uTW6t1g">Color:Gray RAM:2G Bundle:Official Standard ROM:16g </div>
                                                        <div className="list--itemReview--xQUhO78">It is very practical, the color Nice, surprisingly has something similar to the Face ID, you can use any charger, it comes with everything included, charge several applications well but the battery is a disadvantage without use lasts about 7 hours with not excessive use much less</div>
                                                        <div className="list--itemThumbnails--FPw0Ny9">
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/Ab5a3bf4166d9439498622e8bef12cc55y.jpg_220x220.jpg_.webp" alt="" /></div>
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/Aa23b7618430d49a98db983375a161f73F.jpg_220x220.jpg_.webp" alt="" /></div>
                                                            <div className="list--itemThumbnail--xc9Oc_A"><img src="https://ae-pic-a1.aliexpress-media.com/kf/A8c0a90e5bc0e4c81bd32fdd2ee282cb00.jpg_220x220.jpg_.webp" alt="" /></div>
                                                        </div>
                                                        <div className="list--itemThumbnails--FPw0Ny9" />
                                                    </div>
                                                    <div className="list--itemDesc--P6HS4zO">
                                                        <div className="list--itemInfo--URmp38d">P***c | 06 Nov 2024</div>
                                                        <div className="list--itemHelp--LkvM733"><span className="comet-icon comet-icon-like list--itemHelpIcon--iLyYPaI style-pXxZw" id="style-pXxZw"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M450.261333 169.28A74.666667 74.666667 0 0 1 517.034667 128H533.333333a74.666667 74.666667 0 0 1 74.666667 74.666667v170.666666a10.666667 10.666667 0 0 0 10.666667 10.666667h228.138666a74.666667 74.666667 0 0 1 73.92 85.226667l-51.818666 362.666666A74.666667 74.666667 0 0 1 794.986667 896H202.666667A74.666667 74.666667 0 0 1 128 821.333333v-362.666666A74.666667 74.666667 0 0 1 202.666667 384h133.632a10.666667 10.666667 0 0 0 9.536-5.888l104.426666-208.853333zM517.034667 192a10.666667 10.666667 0 0 0-9.536 5.888l-104.426667 208.853333A74.666667 74.666667 0 0 1 336.298667 448H202.666667a10.666667 10.666667 0 0 0-10.666667 10.666667v362.666666a10.666667 10.666667 0 0 0 10.666667 10.666667h592.32a10.666667 10.666667 0 0 0 10.56-9.173333l51.818666-362.666667a10.666667 10.666667 0 0 0-10.56-12.16H618.666667a74.666667 74.666667 0 0 1-74.666667-74.666667v-170.666666A10.666667 10.666667 0 0 0 533.333333 192h-16.298666z" />
                                                            <path d="M298.666667 768V512a64 64 0 0 1 64 64v192h-64z" />
                                                        </svg></span>&nbsp;<span className="list--itemHelpText--JHnJHcW">Helpful (0)</span>&nbsp;<span className="menu--wrap--KxIJ1AZ"><span className="comet-icon comet-icon-overflowmenuhorizontal  style-pk8DQ" id="style-pk8DQ"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                                                            <path d="M789.333333 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
                                                            <path d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
                                                            <path d="M234.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
                                                        </svg></span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><button type="button" className="comet-v2-btn comet-v2-btn-slim comet-v2-btn-large comet-v2-btn-important style-Y7wYw" id="style-Y7wYw"><span>View More</span></button>
                            </div>
                        </LegacyCard>
                    </div>
                </Grid.Cell>
            </Grid>
        </div >
    )
}

export default ReviewListCus