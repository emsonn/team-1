import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Respond from './Respond.js'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function ExpertInfo() {
  return (
    <Typography variant="headline" component="h3">
      Expert Title | Expert position
    </Typography>
  )
}

class Comment extends React.Component{
  constructor(props){
      super(props);
      this.state = {subject: '', body: '', open: false, vertical: 'top', horizontal: 'left', expert: 'false'};

      this.showExpertInfo = this.showExpertInfo.bind(this);
  }

  showExpertInfo() {
    //TODO: Check if the user is an expert, if so display their title and org they are involved in + maybe an icon
  }

  render() {
    const { classes } = this.props;
    var ExpertInfo = <div></div>
    if(this.state.expert){
      ExpertInfo=<ExpertInfo/>
    }
    return (
      <Card>
        <CardContent>

          <Typography variant="headline" component="h2">
            {this.props.username}
          </Typography>

          {/*showExpertInfo();*/}

          {/*ExpertInfo*/}

          <Typography component="p">
            {this.props.content}

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">Dislike</Button>
        </CardActions>
      </Card>
    );
  }
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
