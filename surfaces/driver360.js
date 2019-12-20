import React from 'react';
import Zone from '../constants/zoneconstants';
import Action from '../constants/actionconstants';
import {isZone} from '../helpers/zonehelpers';
import {isAction} from '../helpers/actionhelpers';
import {connect, setZone} from '../store/store';
import {View, StyleSheet, VrButton, Text} from 'react-360';

class Driver360 extends React.Component {

  render() {
    return (
      <View>

        {isZone(this.props.zone, Zone.Stata) &&
        <View style={styles.panel}>
          <VrButton
            onClick={() => setZone(Zone.Ryzon)}
            style={styles.greetingBox}>
            <Text style={styles.greeting}>
                Welcome to Driver 360
            </Text>
          </VrButton>
        </View>
        }

        {isZone(this.props.zone, Zone.Ryzon) &&
        <View style={styles.panel}>
          <Text style={styles.greeting}>
          {
            isAction(this.props.action, Action.SignGivingOrderEntry20Zone) ? 'Maximum speed.' :
            'Click on the traffic sign.'
          }
          </Text>
        </View>
        }

      </View>
    );
  };
};

const styles = StyleSheet.create({
  panel: {
    width: 600,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 30,
  },
});

const ConnectedDriver360 = connect(Driver360);

export default ConnectedDriver360;
