import React from 'react'
import { Page, Badge, LegacyCard, Button, Grid, ProgressBar, Card } from '@shopify/polaris';
import '../assets/main.css';

const homePage = () => {
  return (
    <section classNameName="homepage">
      <Page
        subtitle="Here's what's happening with your reviews"
      >
        <div className="alert_bar">
          <LegacyCard className='hii' title="Enable Reviews Widget" style={{ marginBottom: '1rem', }} sectioned>
            <p>Your widget is currently disabled. Ready to start building your reviews?</p>
            <Button size='medium'>View and Enable Reviews Widget</Button>
          </LegacyCard>
        </div>

        <div class="metrics-card-container review_data_row mb-20">
          <div class="left-metrics">
            <div class="metrics-card Polaris-LegacyCard Polaris-LegacyCard--withoutTitle">
              <div class="Polaris-LegacyCard__Section">
                <h3 class="Polaris-Text--root Polaris-Text--headingXs Polaris-Text--semibold">
                  <span class="title">Reviews Collected
                    <span class="tip" data-hover="Reviews collected for your store">
                      <i class="fa fa-question-circle-o"></i>
                    </span>
                  </span>
                </h3>
                <div class="stat-value">
                  <turbo-frame class="loads-with-spinner" data-turbo-frames-target="frame" id="dashboard_ratings_count" src="https://reviews.rivo.io/rev/dashboard/metrics?metric_type=ratings_count&amp;shop=hatake-broke.myshopify.com" complete="">
                    <span class="value">0</span>
                  </turbo-frame>
                  {/* <p class="spinner">
                    <span class="Polaris-Spinner Polaris-Spinner--sizeSmall">
                      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path>
                      </svg>
                    </span>
                  </p> */}
                </div>
              </div>
              <div class="Polaris-LegacyCard__Section">
                <h3 class="Polaris-Text--root Polaris-Text--headingXs Polaris-Text--semibold">
                  <span class="title">Average Rating <span class="tip" data-hover="Average Rating of all products reviewed">
                    <i class="fa fa-question-circle-o"></i>
                  </span></span>
                </h3>
                <div class="stat-value">
                  <turbo-frame class="loads-with-spinner" data-turbo-frames-target="frame" id="average_rating" src="https://reviews.rivo.io/rev/dashboard/metrics?metric_type=average_rating&amp;shop=hatake-broke.myshopify.com" complete="">
                    -
                  </turbo-frame>
                </div>
              </div>
            </div>
            <div class="metrics-card Polaris-LegacyCard Polaris-LegacyCard--withoutTitle" style={{ margin: 0 }}>
              <div class="bg-dark Polaris-LegacyCard__Section">
                <h3 class="Polaris-Text--root Polaris-Text--headingXs Polaris-Text--semibold">
                  <span class="title">
                    Review Requests Sent
                    <span class="tip" data-hover="Reviews requests sent via email">
                      <i class="fa fa-question-circle-o"></i>
                    </span>
                  </span>
                </h3>
                <div class="stat-value">
                  <turbo-frame class="loads-with-spinner" data-turbo-frames-target="frame" id="dashboard_emails_sent_count" src="https://reviews.rivo.io/rev/dashboard/metrics?metric_type=emails_sent_count&amp;shop=hatake-broke.myshopify.com" complete="">
                    <span class="value">0</span>
                  </turbo-frame>
                </div>
              </div>
              <div class="Polaris-LegacyCard__Section">
                <h3 class="Polaris-Text--root Polaris-Text--headingXs Polaris-Text--semibold">
                  <span class="title">Products Reviewed
                    <span class="tip" data-hover="Number of products reviewed">
                      <i class="fa fa-question-circle-o"></i>
                    </span>
                  </span>
                </h3>
                <div class="stat-value">
                  <turbo-frame class="loads-with-spinner" data-turbo-frames-target="frame" id="dashboard_products_reviewed_count" src="https://reviews.rivo.io/rev/dashboard/metrics?metric_type=products_reviewed_count&amp;shop=hatake-broke.myshopify.com" complete="">
                    <span class="value">0</span>
                  </turbo-frame>
                </div>
              </div>
            </div>
          </div>
          <div class="right-metrics">
            <div class="metrics-card Polaris-LegacyCard Polaris-LegacyCard--withoutTitle">
              <div class="Polaris-LegacyCard__Section">
                <h3 class="Polaris-Text--root Polaris-Text--headingXs Polaris-Text--semibold">
                  <span class="title">Total Sales Generated
                    <span class="tip" data-hover="Total sales generated from the app.">
                      <i class="fa fa-question-circle-o"></i>
                    </span>
                  </span>
                </h3>
                <div class="stat-value">
                  <turbo-frame class="loads-with-spinner" data-turbo-frames-target="frame" id="dashboard_total_sales" src="https://reviews.rivo.io/rev/dashboard/metrics?metric_type=total_sales&amp;shop=hatake-broke.myshopify.com" complete="">
                    <span class="value">Rs. 0.00</span>
                  </turbo-frame>
                </div>
              </div>
              <div class="Polaris-LegacyCard__Section">
                <h3 class="Polaris-Text--root Polaris-Text--headingXs Polaris-Text--semibold">
                  Read our help docs to learn how to get the most out of the app
                </h3>
                <div class="stat-value">
                  <a href="#" data-controller="polaris-button" class="open-intercom Polaris-Button Polaris-Button--secondary">
                    <span class="Polaris-Button__Content">
                      <div class="Polaris-Button__Text">
                        Learn More
                      </div>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar Section */}
        <div className="progress_bar_section" >
          <LegacyCard title="Getting Started Checklist" sectioned >
            <ProgressBar tone="success" progress={75} />
            <div class="guide-accordion mt-20">
              <div class="guide-step">
                <div class="guide-step-icon">
                  <img src="https://d1327z4fntq4ap.cloudfront.net/assets/tick-91042014ace9b97bb1530d0c08154cde1239bcecb59a18b17d1bfe24685a538b.svg" />
                </div>
                <div class="guide-step-body">
                  <h6 class="Polaris-Text--root Polaris-Text--headingSm Polaris-Text--semibold">
                    Install the app
                  </h6>
                </div>
              </div>
              <div class="guide-step">
                <div class="guide-step-icon">

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="TaglK">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9147 13.3062L19.9315 13.0475C19.9761 12.7056 19.9993 12.3561 19.9993 12.0001C19.9993 11.6442 19.9761 11.2946 19.9315 10.9527L21.9147 10.694C21.9705 11.1215 21.9993 11.5575 21.9993 12.0001C21.9993 12.4428 21.9705 12.8787 21.9147 13.3062ZM21.2405 8.17224L19.393 8.93835C19.1238 8.28906 18.7709 7.68206 18.3474 7.13093L19.9333 5.91228C20.4621 6.6004 20.9033 7.35927 21.2405 8.17224ZM18.0871 4.06613L16.8685 5.65197C16.3173 5.22845 15.7103 4.87563 15.061 4.60638L15.8271 2.75893C16.6401 3.09605 17.399 3.53734 18.0871 4.06613ZM13.3054 2.08464L13.0467 4.06784C12.7048 4.02324 12.3552 4.00012 11.9993 4.00012C11.6433 4.00012 11.2938 4.02324 10.9519 4.06784L10.6932 2.08464C11.1206 2.02889 11.5566 2.00012 11.9993 2.00012C12.4419 2.00012 12.8779 2.02889 13.3054 2.08464ZM8.17139 2.75893L8.9375 4.60638C8.2882 4.87563 7.6812 5.22845 7.13008 5.65197L5.91143 4.06613C6.59954 3.53734 7.35841 3.09606 8.17139 2.75893ZM4.06527 5.91228L5.65111 7.13093C5.22759 7.68206 4.87478 8.28906 4.60552 8.93835L2.75807 8.17225C3.0952 7.35927 3.53648 6.6004 4.06527 5.91228ZM2.08379 10.694C2.02803 11.1215 1.99927 11.5575 1.99927 12.0001C1.99927 12.4428 2.02803 12.8787 2.08379 13.3062L4.06699 13.0475C4.02239 12.7056 3.99927 12.3561 3.99927 12.0001C3.99927 11.6442 4.02239 11.2946 4.06699 10.9527L2.08379 10.694ZM2.75807 15.828L4.60553 15.0619C4.87478 15.7112 5.22759 16.3182 5.65111 16.8693L4.06527 18.088C3.53648 17.3998 3.0952 16.641 2.75807 15.828ZM5.91143 19.9341L7.13008 18.3483C7.68121 18.7718 8.28821 19.1246 8.9375 19.3939L8.17139 21.2413C7.35841 20.9042 6.59955 20.4629 5.91143 19.9341ZM10.6932 21.9156L10.9519 19.9324C11.2938 19.977 11.6433 20.0001 11.9993 20.0001C12.3552 20.0001 12.7048 19.977 13.0467 19.9324L13.3054 21.9156C12.8779 21.9714 12.4419 22.0001 11.9993 22.0001C11.5566 22.0001 11.1206 21.9714 10.6932 21.9156ZM15.8271 21.2413L15.061 19.3939C15.7103 19.1246 16.3173 18.7718 16.8685 18.3483L18.0871 19.9341C17.399 20.4629 16.6401 20.9042 15.8271 21.2413ZM19.9333 18.088L18.3474 16.8693C18.7709 16.3182 19.1238 15.7112 19.393 15.0619L21.2405 15.828C20.9033 16.641 20.4621 17.3998 19.9333 18.088Z" fill="#8C9196" class="incomplete-task-hover"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5334 2.10692C11.0126 2.03643 11.5024 2 12 2C12.4976 2 12.9874 2.03643 13.4666 2.10692C14.013 2.18729 14.3908 2.6954 14.3104 3.2418C14.23 3.78821 13.7219 4.166 13.1755 4.08563C12.7924 4.02927 12.3999 4 12 4C11.6001 4 11.2076 4.02927 10.8245 4.08563C10.2781 4.166 9.76995 3.78821 9.68958 3.2418C9.6092 2.6954 9.987 2.18729 10.5334 2.10692ZM7.44122 4.17428C7.77056 4.61763 7.67814 5.24401 7.23479 5.57335C6.603 6.04267 6.04267 6.603 5.57335 7.23479C5.24401 7.67814 4.61763 7.77056 4.17428 7.44122C3.73094 7.11188 3.63852 6.4855 3.96785 6.04216C4.55386 5.25329 5.25329 4.55386 6.04216 3.96785C6.4855 3.63852 7.11188 3.73094 7.44122 4.17428ZM16.5588 4.17428C16.8881 3.73094 17.5145 3.63852 17.9578 3.96785C18.7467 4.55386 19.4461 5.25329 20.0321 6.04216C20.3615 6.4855 20.2691 7.11188 19.8257 7.44122C19.3824 7.77056 18.756 7.67814 18.4267 7.23479C17.9573 6.603 17.397 6.04267 16.7652 5.57335C16.3219 5.24401 16.2294 4.61763 16.5588 4.17428ZM3.2418 9.68958C3.78821 9.76995 4.166 10.2781 4.08563 10.8245C4.02927 11.2076 4 11.6001 4 12C4 12.3999 4.02927 12.7924 4.08563 13.1755C4.166 13.7219 3.78821 14.23 3.2418 14.3104C2.6954 14.3908 2.18729 14.013 2.10692 13.4666C2.03643 12.9874 2 12.4976 2 12C2 11.5024 2.03643 11.0126 2.10692 10.5334C2.18729 9.987 2.6954 9.6092 3.2418 9.68958ZM20.7582 9.68958C21.3046 9.6092 21.8127 9.987 21.8931 10.5334C21.9636 11.0126 22 11.5024 22 12C22 12.4976 21.9636 12.9874 21.8931 13.4666C21.8127 14.013 21.3046 14.3908 20.7582 14.3104C20.2118 14.23 19.834 13.7219 19.9144 13.1755C19.9707 12.7924 20 12.3999 20 12C20 11.6001 19.9707 11.2076 19.9144 10.8245C19.834 10.2781 20.2118 9.76995 20.7582 9.68958ZM4.17428 16.5588C4.61763 16.2294 5.24401 16.3219 5.57335 16.7652C6.04267 17.397 6.603 17.9573 7.23479 18.4267C7.67814 18.756 7.77056 19.3824 7.44122 19.8257C7.11188 20.2691 6.4855 20.3615 6.04216 20.0321C5.25329 19.4461 4.55386 18.7467 3.96785 17.9578C3.63852 17.5145 3.73094 16.8881 4.17428 16.5588ZM19.8257 16.5588C20.2691 16.8881 20.3615 17.5145 20.0321 17.9578C19.4461 18.7467 18.7467 19.4461 17.9578 20.0321C17.5145 20.3615 16.8881 20.2691 16.5588 19.8257C16.2294 19.3824 16.3219 18.756 16.7652 18.4267C17.397 17.9573 17.9573 17.397 18.4267 16.7652C18.756 16.3219 19.3824 16.2294 19.8257 16.5588ZM9.68958 20.7582C9.76995 20.2118 10.2781 19.834 10.8245 19.9144C11.2076 19.9707 11.6001 20 12 20C12.3999 20 12.7924 19.9707 13.1755 19.9144C13.7219 19.834 14.23 20.2118 14.3104 20.7582C14.3908 21.3046 14.013 21.8127 13.4666 21.8931C12.9874 21.9636 12.4976 22 12 22C11.5024 22 11.0126 21.9636 10.5334 21.8931C9.987 21.8127 9.6092 21.3046 9.68958 20.7582Z" fill="#8A8A8A" class="incomplete-task-static"></path>
                    <circle cx="12" cy="12" r="12" fill="#DBDDDF" class="incomplete-task-hover"></circle>
                    <circle cx="12" cy="12" r="9" fill="#F6F6F7" stroke="#999EA4" stroke-width="2" class="incomplete-task-hover"></circle>
                  </svg>

                </div>
                <div class="guide-step-body">
                  <a class="guide-step-link" target="_blank" data-controller="utils" data-action="click->utils#recordAppClick" data-event-column="theme_extension_link_first_clicked_at" data-event-name="Theme Extension Link Clicked" href="https://admin.shopify.com/store/hatake-broke/themes/current/editor?context=apps&amp;activateAppId=5f785e18-66cc-4519-8181-565d1cce1705/app-embed">
                    <h6 class="Polaris-Text--root Polaris-Text--headingSm Polaris-Text--semibold">
                      View our theme extensions
                    </h6>
                  </a>      </div>
              </div>
              <div class="guide-step">
                <div class="guide-step-icon">

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="TaglK">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9147 13.3062L19.9315 13.0475C19.9761 12.7056 19.9993 12.3561 19.9993 12.0001C19.9993 11.6442 19.9761 11.2946 19.9315 10.9527L21.9147 10.694C21.9705 11.1215 21.9993 11.5575 21.9993 12.0001C21.9993 12.4428 21.9705 12.8787 21.9147 13.3062ZM21.2405 8.17224L19.393 8.93835C19.1238 8.28906 18.7709 7.68206 18.3474 7.13093L19.9333 5.91228C20.4621 6.6004 20.9033 7.35927 21.2405 8.17224ZM18.0871 4.06613L16.8685 5.65197C16.3173 5.22845 15.7103 4.87563 15.061 4.60638L15.8271 2.75893C16.6401 3.09605 17.399 3.53734 18.0871 4.06613ZM13.3054 2.08464L13.0467 4.06784C12.7048 4.02324 12.3552 4.00012 11.9993 4.00012C11.6433 4.00012 11.2938 4.02324 10.9519 4.06784L10.6932 2.08464C11.1206 2.02889 11.5566 2.00012 11.9993 2.00012C12.4419 2.00012 12.8779 2.02889 13.3054 2.08464ZM8.17139 2.75893L8.9375 4.60638C8.2882 4.87563 7.6812 5.22845 7.13008 5.65197L5.91143 4.06613C6.59954 3.53734 7.35841 3.09606 8.17139 2.75893ZM4.06527 5.91228L5.65111 7.13093C5.22759 7.68206 4.87478 8.28906 4.60552 8.93835L2.75807 8.17225C3.0952 7.35927 3.53648 6.6004 4.06527 5.91228ZM2.08379 10.694C2.02803 11.1215 1.99927 11.5575 1.99927 12.0001C1.99927 12.4428 2.02803 12.8787 2.08379 13.3062L4.06699 13.0475C4.02239 12.7056 3.99927 12.3561 3.99927 12.0001C3.99927 11.6442 4.02239 11.2946 4.06699 10.9527L2.08379 10.694ZM2.75807 15.828L4.60553 15.0619C4.87478 15.7112 5.22759 16.3182 5.65111 16.8693L4.06527 18.088C3.53648 17.3998 3.0952 16.641 2.75807 15.828ZM5.91143 19.9341L7.13008 18.3483C7.68121 18.7718 8.28821 19.1246 8.9375 19.3939L8.17139 21.2413C7.35841 20.9042 6.59955 20.4629 5.91143 19.9341ZM10.6932 21.9156L10.9519 19.9324C11.2938 19.977 11.6433 20.0001 11.9993 20.0001C12.3552 20.0001 12.7048 19.977 13.0467 19.9324L13.3054 21.9156C12.8779 21.9714 12.4419 22.0001 11.9993 22.0001C11.5566 22.0001 11.1206 21.9714 10.6932 21.9156ZM15.8271 21.2413L15.061 19.3939C15.7103 19.1246 16.3173 18.7718 16.8685 18.3483L18.0871 19.9341C17.399 20.4629 16.6401 20.9042 15.8271 21.2413ZM19.9333 18.088L18.3474 16.8693C18.7709 16.3182 19.1238 15.7112 19.393 15.0619L21.2405 15.828C20.9033 16.641 20.4621 17.3998 19.9333 18.088Z" fill="#8C9196" class="incomplete-task-hover"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5334 2.10692C11.0126 2.03643 11.5024 2 12 2C12.4976 2 12.9874 2.03643 13.4666 2.10692C14.013 2.18729 14.3908 2.6954 14.3104 3.2418C14.23 3.78821 13.7219 4.166 13.1755 4.08563C12.7924 4.02927 12.3999 4 12 4C11.6001 4 11.2076 4.02927 10.8245 4.08563C10.2781 4.166 9.76995 3.78821 9.68958 3.2418C9.6092 2.6954 9.987 2.18729 10.5334 2.10692ZM7.44122 4.17428C7.77056 4.61763 7.67814 5.24401 7.23479 5.57335C6.603 6.04267 6.04267 6.603 5.57335 7.23479C5.24401 7.67814 4.61763 7.77056 4.17428 7.44122C3.73094 7.11188 3.63852 6.4855 3.96785 6.04216C4.55386 5.25329 5.25329 4.55386 6.04216 3.96785C6.4855 3.63852 7.11188 3.73094 7.44122 4.17428ZM16.5588 4.17428C16.8881 3.73094 17.5145 3.63852 17.9578 3.96785C18.7467 4.55386 19.4461 5.25329 20.0321 6.04216C20.3615 6.4855 20.2691 7.11188 19.8257 7.44122C19.3824 7.77056 18.756 7.67814 18.4267 7.23479C17.9573 6.603 17.397 6.04267 16.7652 5.57335C16.3219 5.24401 16.2294 4.61763 16.5588 4.17428ZM3.2418 9.68958C3.78821 9.76995 4.166 10.2781 4.08563 10.8245C4.02927 11.2076 4 11.6001 4 12C4 12.3999 4.02927 12.7924 4.08563 13.1755C4.166 13.7219 3.78821 14.23 3.2418 14.3104C2.6954 14.3908 2.18729 14.013 2.10692 13.4666C2.03643 12.9874 2 12.4976 2 12C2 11.5024 2.03643 11.0126 2.10692 10.5334C2.18729 9.987 2.6954 9.6092 3.2418 9.68958ZM20.7582 9.68958C21.3046 9.6092 21.8127 9.987 21.8931 10.5334C21.9636 11.0126 22 11.5024 22 12C22 12.4976 21.9636 12.9874 21.8931 13.4666C21.8127 14.013 21.3046 14.3908 20.7582 14.3104C20.2118 14.23 19.834 13.7219 19.9144 13.1755C19.9707 12.7924 20 12.3999 20 12C20 11.6001 19.9707 11.2076 19.9144 10.8245C19.834 10.2781 20.2118 9.76995 20.7582 9.68958ZM4.17428 16.5588C4.61763 16.2294 5.24401 16.3219 5.57335 16.7652C6.04267 17.397 6.603 17.9573 7.23479 18.4267C7.67814 18.756 7.77056 19.3824 7.44122 19.8257C7.11188 20.2691 6.4855 20.3615 6.04216 20.0321C5.25329 19.4461 4.55386 18.7467 3.96785 17.9578C3.63852 17.5145 3.73094 16.8881 4.17428 16.5588ZM19.8257 16.5588C20.2691 16.8881 20.3615 17.5145 20.0321 17.9578C19.4461 18.7467 18.7467 19.4461 17.9578 20.0321C17.5145 20.3615 16.8881 20.2691 16.5588 19.8257C16.2294 19.3824 16.3219 18.756 16.7652 18.4267C17.397 17.9573 17.9573 17.397 18.4267 16.7652C18.756 16.3219 19.3824 16.2294 19.8257 16.5588ZM9.68958 20.7582C9.76995 20.2118 10.2781 19.834 10.8245 19.9144C11.2076 19.9707 11.6001 20 12 20C12.3999 20 12.7924 19.9707 13.1755 19.9144C13.7219 19.834 14.23 20.2118 14.3104 20.7582C14.3908 21.3046 14.013 21.8127 13.4666 21.8931C12.9874 21.9636 12.4976 22 12 22C11.5024 22 11.0126 21.9636 10.5334 21.8931C9.987 21.8127 9.6092 21.3046 9.68958 20.7582Z" fill="#8A8A8A" class="incomplete-task-static"></path>
                    <circle cx="12" cy="12" r="12" fill="#DBDDDF" class="incomplete-task-hover"></circle>
                    <circle cx="12" cy="12" r="9" fill="#F6F6F7" stroke="#999EA4" stroke-width="2" class="incomplete-task-hover"></circle>
                  </svg>

                </div>
                <div class="guide-step-body">
                  <a class="guide-step-link" href="/rev/onsite/display/dashboard?shop=hatake-broke.myshopify.com">
                    <h6 class="Polaris-Text--root Polaris-Text--headingSm Polaris-Text--semibold">
                      Enable the storefront display
                    </h6>
                  </a>      </div>
              </div>
              <div class="guide-step">
                <div class="guide-step-icon">
                  <img src="https://d1327z4fntq4ap.cloudfront.net/assets/tick-91042014ace9b97bb1530d0c08154cde1239bcecb59a18b17d1bfe24685a538b.svg" />
                </div>
                <div class="guide-step-body">
                  <a class="guide-step-link" href="/rev/onsite/display/dashboard?shop=hatake-broke.myshopify.com">
                    <h6 class="Polaris-Text--root Polaris-Text--headingSm Polaris-Text--semibold">
                      View your brand settings
                    </h6>
                  </a>      </div>
              </div>
            </div>
          </LegacyCard>
        </div>

      </Page>
    </section>

  )
}

export default homePage