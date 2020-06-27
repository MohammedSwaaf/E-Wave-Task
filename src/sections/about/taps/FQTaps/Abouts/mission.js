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

export default function Mission() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [newExpanded, setNewExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChangeNewExpend = (panel2) => (event, hasExpanded) => {
    setNewExpanded(hasExpanded ? panel2 : false);
  };
  return (
    <div className=''>
        <h2 className='headNav'>About Us</h2>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>But I must explain to you how all this mistaken?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className='dowenCollapse'>
          Anything you can do on a computer can be done through us.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>      <br/>
      <ExpansionPanel expanded={newExpanded === 'panel2'} onChange={handleChangeNewExpend('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>What’s the difference between finding clients online, versus locally?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className='dowenCollapse'>
          Technology is making online work similar to local work, with added speed, cost, and quality advantages.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>  
    </div>
  );
}
