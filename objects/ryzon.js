import React from 'react';
import Zone from '../constants/zoneconstants';
import Action from '../constants/actionconstants';
import {isZone} from '../helpers/zonehelpers';
import {isAction} from '../helpers/actionhelpers';
import {connect, setAction, incrementKarma} from '../store/store';
import {View, VrButton, AmbientLight, PointLight, asset} from 'react-360';
import Entity from 'Entity';

class Ryzon extends React.Component {

    state = {
        scaleTrafficSign: 0
    };

    handleTrafficSign = () => {
        if (isAction(this.props.action, '')){
            incrementKarma();
            setAction(Action.SignGivingOrderEntry20Zone);
        }
    };

    render() {
        return (
            isZone(this.props.zone, Zone.Ryzon) && 
            <View>
                <AmbientLight intensity={ 0.6 } />
                <PointLight 
                    distance={ 10 }
                    style={{
                        color: 'white', 
                        transform: [
                            {translate: [0, 1, 2]}
                        ]
                    }} 
                />
                <Entity
                    source={{
                        obj: asset('PointLight.obj'),
                        mtl: asset('PointLight.mtl')
                    }}
                    style={{
                        transform: [
                            {translate: [0, 1, 2]}
                        ]
                    }}
                />
                <VrButton
                    onClick={this.handleTrafficSign}
                    onEnter={() => this.setState({scaleTrafficSign: 0.1})}
                    onExit={() => this.setState({scaleTrafficSign: 0})}>
                    <Entity
                        source={{
                            obj: asset('SignGivingOrderMaximumSpeed.obj'),
                            mtl: asset('SignGivingOrderMaximumSpeed.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                {translate: [-3, -1, -4]},
                                {scale: 1.0 + this.state.scaleTrafficSign}
                            ]
                        }}
                    />
                </VrButton>
            </View>
        );
    };
};

const ConnectedRyzon = connect(Ryzon);

export default ConnectedRyzon;
