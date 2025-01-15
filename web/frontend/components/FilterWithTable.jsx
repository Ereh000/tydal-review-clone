import { ActionList, Button, ButtonGroup, Popover, Select } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'

const FilterWithTable = ({ Review }) => {

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }





  // In your component:
  const longText = "This is a long text that will be truncated.";
  const shortText = truncateText(longText, 20);

  return (
    <div class='search_with_filter'>
      <div style={{ height: 'auto' }}>
        <div class="Polaris-LegacyCard">
          <div class="Polaris-LegacyCard__Section Polaris-LegacyCard__FirstSectionPadding">
            <div class="Polaris-LegacyFilters">
              <div class="Polaris-LegacyFilters-ConnectedFilterControl__ProxyButtonContainer" aria-hidden="true">
                {/* <div data-key="availability">
                  <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button">
                    <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Product</span>
                    <span class="Polaris-Button__Icon">
                      <span class="Polaris-Icon">
                        <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z">
                          </path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </div> */}
              </div>
              <div class="Polaris-LegacyFilters-ConnectedFilterControl__Wrapper">
                <div class="Polaris-LegacyFilters-ConnectedFilterControl Polaris-LegacyFilters-ConnectedFilterControl--right">
                  <div class="Polaris-LegacyFilters-ConnectedFilterControl__CenterContainer">
                    <div class="Polaris-LegacyFilters-ConnectedFilterControl__Item">
                      <div class="Polaris-Labelled--hidden">
                        <div class="Polaris-Labelled__LabelWrapper">
                          <div class="Polaris-Label">
                            <label id=":Rm6cq6:Label" for=":Rm6cq6:" class="Polaris-Label__Text">
                              <span class="Polaris-Text--root Polaris-Text--bodyMd">Filter items</span>
                            </label>
                          </div>
                        </div>
                        <div class="Polaris-Connected">
                          <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">
                            <div class="Polaris-TextField">
                              <div class="Polaris-TextField__Prefix" id=":Rm6cq6:-Prefix">
                                <span class="Polaris-Text--root Polaris-Text--bodyMd">
                                  <span class="Polaris-LegacyFilters__SearchIcon">
                                    <span class="Polaris-Icon">
                                      <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z">
                                        </path>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                              </div>
                              <input id=":Rm6cq6:" placeholder="Filter items" autocomplete="off" class="Polaris-TextField__Input Polaris-TextField__Input--hasClearButton" type="text" aria-labelledby=":Rm6cq6:Label :Rm6cq6:-Prefix" aria-invalid="false" data-1p-ignore="true" data-lpignore="true" data-form-type="other" value="" />
                              <div class="Polaris-TextField__Backdrop">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Polaris-LegacyFilters-ConnectedFilterControl__RightContainer">
                    <div class="Polaris-LegacyFilters-ConnectedFilterControl__Item">

                      <div>
                        <button id="Activator-availability" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button" tabindex="0" aria-controls=":r0:" aria-owns=":r0:" aria-expanded="false" data-state="closed">
                          <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Product</span>
                          <span class="Polaris-Button__Icon">
                            <span class="Polaris-Icon">
                              <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z">
                                </path>
                              </svg>
                            </span>
                          </span>
                        </button>
                        <button id="Activator-availability" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button" tabindex="0" aria-controls=":r0:" aria-owns=":r0:" aria-expanded="false" data-state="closed">
                          <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Rating</span>
                          <span class="Polaris-Button__Icon">
                            <span class="Polaris-Icon">
                              <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z">
                                </path>
                              </svg>
                            </span>
                          </span>
                        </button>
                        <button id="Activator-availability" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button" tabindex="0" aria-controls=":r0:" aria-owns=":r0:" aria-expanded="false" data-state="closed">
                          <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Replied</span>
                          <span class="Polaris-Button__Icon">
                            <span class="Polaris-Icon">
                              <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z">
                                </path>
                              </svg>
                            </span>
                          </span>
                        </button>
                        <button id="Activator-availability" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button" tabindex="0" aria-controls=":r0:" aria-owns=":r0:" aria-expanded="false" data-state="closed">
                          <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Sort By</span>
                          <span class="Polaris-Button__Icon">
                            <span class="Polaris-Icon">
                              <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z">
                                </path>
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <span class="Polaris-Text--root Polaris-Text--visuallyHidden">
                <div class="Polaris-LegacyFilters__TagsContainer" aria-live="polite">
                </div>
              </span>
            </div>
          </div>
          <div class="">
            <div class="Polaris-DataTable__Navigation">
              <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantTertiary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly Polaris-Button--disabled" aria-label="Scroll table left one column" aria-disabled="true" type="button" tabindex="-1">
                <span class="Polaris-Button__Icon">
                  <span class="Polaris-Icon">
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                      <path fill-rule="evenodd" d="M11.764 5.204a.75.75 0 0 1 .032 1.06l-3.516 3.736 3.516 3.736a.75.75 0 1 1-1.092 1.028l-4-4.25a.75.75 0 0 1 0-1.028l4-4.25a.75.75 0 0 1 1.06-.032Z">
                      </path>
                    </svg>
                  </span>
                </span>
              </button>
              <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantTertiary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" aria-label="Scroll table right one column" type="button">
                <span class="Polaris-Button__Icon">
                  <span class="Polaris-Icon">
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z">
                      </path>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
            <div class="Polaris-DataTable Polaris-DataTable__ShowTotals">
              <div class="Polaris-DataTable__ScrollContainer">
                <table class="Polaris-DataTable__Table">
                  <thead>
                    <tr>
                      <th data-polaris-header-cell="true" class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header" scope="col">ID</th>
                      <th data-polaris-header-cell="true" class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric" scope="col">Name</th>
                      <th data-polaris-header-cell="true" class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric" scope="col">Rating</th>
                      <th data-polaris-header-cell="true" class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric" scope="col">Comment</th>
                      <th data-polaris-header-cell="true" class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric" scope="col">Date</th>
                      <th data-polaris-header-cell="true" class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric" scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Review.map((rev) => {
                      // Status Action button -------------
                      const [selected, setSelected] = useState('today');

                      const handleSelectChange = useCallback(
                        (value) => setSelected(value),
                        [],
                      );

                      const options = [
                        { label: 'Active', value: 'active' },
                        { label: 'Draft', value: 'draft' },
                      ];
                      // Status Action button* -------------
                      return (
                        <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable" key={rev.name}>
                          <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn" scope="row">{rev.id}</th>
                          <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">{rev.name}</td>
                          <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">{rev.rating}</td>
                          {/* <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">{rev.comment} {truncateText(rev.comment, 10)}</td> */}
                          <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">{truncateText(rev.comment, 40)}</td>
                          <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">{rev.date}</td>
                          <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                            <Select
                              // label="Date range"
                              options={options}
                              onChange={handleSelectChange}
                              value={selected}
                            />
                          </td>
                        </tr>
                      )
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-portal-id="popover-:r1:" class="p-theme-light Polaris-ThemeProvider--themeContainer">
      </div>
      <div data-portal-id="sheet-:R2acq6:" class="p-theme-light Polaris-ThemeProvider--themeContainer">
      </div>
    </div>
  )
}

export default FilterWithTable