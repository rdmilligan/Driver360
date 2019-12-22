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
          <Text style={styles.panelText}>
            Driver 360 is a virtual driving experience
            that will help you learn The Highway Code.
          </Text>
          <VrButton
            onClick={() => setZone(Zone.Ryzon)}
            style={styles.button}>
            <Text style={styles.buttonText}>
                Start Driver 360
            </Text>
          </VrButton>
        </View>
        }

        {isZone(this.props.zone, Zone.Ryzon) &&
        <View style={styles.panel}>
          <Text style={styles.panelText}>
          {
            isAction(this.props.action, Action.SignGivingOrderNationalSpeedLimit) ? 'Explanation: national speed limit applies.' :
            isAction(this.props.action, Action.SignGivingOrderMaximumSpeed) ? 'Explanation: maximum speed.' :
            'Click on a traffic sign to learn about it. Once done, look around for other traffic signs.'
          }
          </Text>
        </View>
        }

        {isZone(this.props.zone, Zone.Traja) &&
        <View style={styles.panel}>
          <Text style={styles.panelText}>
            Thank you for playing Driver 360.
          </Text>
          <VrButton
            onClick={() => setZone(Zone.Ryzon)}
            style={styles.button}>
            <Text style={styles.buttonText}>
                Restart Driver 360
            </Text>
          </VrButton>
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
    padding: 20,
  },
  panelText: {
    fontSize: 30,
    padding: 10,
  },
  button: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
  },
});

const ConnectedDriver360 = connect(Driver360);

export default ConnectedDriver360;
