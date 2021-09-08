import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import TuneIcon from '@material-ui/icons/Tune';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';
import './mobile-filter.module.scss';

const useStyles = makeStyles({
  root: {
    margin: '0 0 0 15px',
    width: '235px',
    height: '30px',
    textAlign: 'right',
    borderBottom: 'solid 1px #E2999B',
  },
  label: {
    height: '30px',
    marginBottom: 0,
  },
  list: {
    width: 250,
  },
  radio: {
    color: '#333333',
    '&$checked': {
      color: '#333333',
    },
  },
  checked: {
    color: '#333333',
  },
});

interface NewProps {
  filterOptions: string[];
  filterOverride: string;
  onFilterOptionUpdate(arg0: string): void;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MobileFilter: React.FunctionComponent<NewProps> = (props: NewProps) => {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });
  const [filterOption, setFilterOption] = React.useState(props.filterOverride);

  useEffect(() => {
    props.onFilterOptionUpdate(filterOption);
  }, [filterOption]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOption((event.target as HTMLInputElement).value);
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div role="presentation">
      <List>
        <FormControl component="fieldset">
          <FormLabel component="legend" classes={{ root: classes.label }}>
            <div className="mobile-filter-header">
              <span
                className="mobile-back-button mobile-filter-header-left"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
                role="button"
                tabIndex={-1}
              >
                <ArrowBackIosIcon fontSize="small" />
              </span>
              <span className="mobile-filter-header-center">
                Filter <TuneIcon fontSize="small" />
              </span>
              <span
                className="mobile-reset-button mobile-filter-header-right"
                onClick={() => setFilterOption('All')}
                onKeyDown={() => setFilterOption('All')}
                role="button"
                tabIndex={-2}
              >
                Reset
              </span>
            </div>
          </FormLabel>
          <RadioGroup
            aria-label="filterGroup"
            name="filterGroup"
            value={props.filterOverride}
            onChange={handleChange}
          >
            <Fragment>
              <FormControlLabel
                classes={{ root: classes.root }}
                value={'All'}
                control={
                  <Radio
                    style={{
                      transform: 'scale(0.75)',
                    }}
                    classes={{
                      checked: classes.checked,
                      root: classes.radio,
                    }}
                  />
                }
                label={
                  <Typography style={{ fontSize: '14px', fontWeight: 500 }}>{'All'}</Typography>
                }
              />
            </Fragment>
            {props.filterOptions.map((text, index) => (
              <Fragment key={index}>
                <FormControlLabel
                  classes={{ root: classes.root }}
                  value={text}
                  control={
                    <Radio
                      style={{
                        transform: 'scale(0.75)',
                      }}
                      classes={{
                        checked: classes.checked,
                        root: classes.radio,
                      }}
                    />
                  }
                  label={
                    <Typography style={{ fontSize: '14px', fontWeight: 500 }}>{text}</Typography>
                  }
                />
              </Fragment>
            ))}
          </RadioGroup>
        </FormControl>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'right'}>
        <div
          className="mobile-filter-section filter-desktop-view-hide"
          onClick={toggleDrawer('right', true)}
          onKeyDown={() => toggleDrawer('right', true)}
          role="button"
          tabIndex={-1}
        >
          <TuneIcon fontSize="small" /> Filter
        </div>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MobileFilter;
