import React from 'react';
import Zone from '../constants/zoneconstants';
import Action from '../constants/actionconstants';
import {isZone} from '../helpers/zonehelpers';
import {isAction} from '../helpers/actionhelpers';
import {connect, setZone, setAction, clearAction, incrementKarma, clearKarma} from '../store/store';
import {View, VrButton, AmbientLight, PointLight, Animated, asset} from 'react-360';
import Entity from 'Entity';
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Ryzon extends React.Component {
    animationPosZ = new Animated.Value(0);

    handleTrafficSign = (action) => {
        if (isAction(this.props.action, action)) 
            return;

        incrementKarma();
        setAction(action);
    };

    animationOn = () => {
        Animated.timing(this.animationPosZ, {toValue: 10, duration: 10000}).start((animation) => {
            if (animation.finished){
                this.animationPosZ = new Animated.Value(0);
                clearKarma();
                clearAction();
                setZone(Zone.Traja);
            }
        });
    };

    animationOff = () => {
        this.animationPosZ.stopAnimation();
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
                    onClick={() => this.handleTrafficSign(Action.SignGivingOrderMaximumSpeed)}
                    onEnter={this.animationOff}
                    onExit={this.animationOn}>

                    <AnimatedEntity
                        source={{
                            obj: asset('SignGivingOrderMaximumSpeed.obj'),
                            mtl: asset('SignGivingOrderMaximumSpeed.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                {translateX: -3}, 
                                {translateY: -1},
                                {translateZ: this.animationPosZ}
                            ]
                        }}
                    />
                </VrButton>
                <VrButton
                    onClick={() => this.handleTrafficSign(Action.SignGivingOrderNationalSpeedLimit)}
                    onEnter={this.animationOff}
                    onExit={this.animationOn}>

                    <AnimatedEntity
                        source={{
                            obj: asset('SignGivingOrderNationalSpeedLimit.obj'),
                            mtl: asset('SignGivingOrderNationalSpeedLimit.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                {translateX: 3}, 
                                {translateY: -1},
                                {translateZ: this.animationPosZ}
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
