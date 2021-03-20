import React from 'react';

type TimeLineItemProps = {
  startDate: string;
  endDate?: string;
  title: string;
  companyName: string;
  consultantName?: string; 
  children?: React.ReactNode
};

type SubTitleProps = Pick<TimeLineItemProps, 'companyName' | 'consultantName'>
const SubTitle: React.FC<SubTitleProps>  = ({companyName, consultantName}) => (
  <h4 className="sub-title sub-title--no-padding-bottom">
    <span className="work-place"><img src="https://cdn1.iconfinder.com/data/icons/the-port-flat-lighthouse-and-young-sailor/512/compass-512.png"/></span>
    &nbsp;&nbsp;
    { companyName }
    { consultantName && (
      <>
        &nbsp;&nbsp;
        <i className="fas fa-at"></i>
        &nbsp;&nbsp;
        { consultantName }
      </>
    )}
  </h4>
);

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  startDate,
  endDate = 'Present',
  title,
  companyName,
  consultantName,
  children
}) => (
  <div className="timeline-container wow fadeInUp">
    <div className="content">
      <span className="time">{ startDate } - { endDate }</span>
      <h3 className="title">{ title }</h3>
      <SubTitle companyName={companyName} consultantName={consultantName} />
      { children }
    </div>
  </div>
);

export default TimeLineItem;