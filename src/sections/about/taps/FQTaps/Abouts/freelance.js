import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./aboutsFq.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Freelance() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <div className={classes.root}>
        <h2 className='headNav'>But I must explain</h2>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Lorem ipsum dolor sit amet, consetetur sadipscing?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className='dowenCollapse'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>      
    </div>
    </>
  );
}
