import React from 'react';
import Zone from '../constants/zoneconstants';
import Action from '../constants/actionconstants';
import {isZone} from '../helpers/zonehelpers';
import {connect, setZone, setAction, clearAction} from '../store/store';
import {View, VrButton, AmbientLight, PointLight, Animated, asset} from 'react-360';
import {Easing} from 'react-native'
import Entity from 'Entity';
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Ryzon extends React.Component {
    animationPosZ = new Animated.Value(0);

    animationOn = () => {
        const toValue = 20;
        const duration = (toValue - this.animationPosZ._value) * 1000;

        Animated.timing(this.animationPosZ, {toValue: toValue, duration: duration, easing: Easing.linear}).start((animation) => {
            if (animation.finished){
                this.animationPosZ = new Animated.Value(0);
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
                    onClick={() => setAction(Action.SignGivingOrderMaximumSpeed)}
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
                    onClick={() => setAction(Action.SignGivingOrderNationalSpeedLimit)}
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
                <VrButton
                    onClick={() => setAction(Action.SignGivingOrderGiveWay)}
                    onEnter={this.animationOff}
                    onExit={this.animationOn}>

                    <AnimatedEntity
                        source={{
                            obj: asset('SignGivingOrderGiveWay.obj'),
                            mtl: asset('SignGivingOrderGiveWay.mtl')
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
                    onClick={() => setAction(Action.SignGivingOrderSegregatedCyclePedestrianRoute)}
                    onEnter={this.animationOff}
                    onExit={this.animationOn}>

                    <AnimatedEntity
                        source={{
                            obj: asset('SignGivingOrderSegregatedCyclePedestrianRoute.obj'),
                            mtl: asset('SignGivingOrderSegregatedCyclePedestrianRoute.mtl')
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
                <VrButton
                    onClick={() => setAction(Action.SignGivingOrderVehiclePassEitherSide)}
                    onEnter={this.animationOff}
                    onExit={this.animationOn}>

                    <AnimatedEntity
                        source={{
                            obj: asset('SignGivingOrderVehiclePassEitherSide.obj'),
                            mtl: asset('SignGivingOrderVehiclePassEitherSide.mtl')
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
                <VrButton
                    onClick={() => setAction(Action.SignGivingOrderContraFlowBusLane)}
                    onEnter={this.animationOff}
                    onExit={this.animationOn}>

                    <AnimatedEntity
                        source={{
                            obj: asset('SignGivingOrderContraFlowBusLane.obj'),
                            mtl: asset('SignGivingOrderContraFlowBusLane.mtl')
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
                    onClick={() => setAction(Action.SignGivingOrderSchoolCrossingPatrol)}
                    onEnter={this.animationOff}
                    onExit={this.animationOn}>

                    <AnimatedEntity
                        source={{
                            obj: asset('SignGivingOrderSchoolCrossingPatrol.obj'),
                            mtl: asset('SignGivingOrderSchoolCrossingPatrol.mtl')
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
                <AnimatedEntity
                    source={{
                        obj: asset('Road.obj'),
                        mtl: asset('Road.mtl')
                    }}
                    style={{
                        transform: [
                            {translateX: 0}, 
                            {translateY: -1},
                            {translateZ: this.animationPosZ}
                        ]
                    }}
                />
            </View>
        );
    };
};

const ConnectedRyzon = connect(Ryzon);

export default ConnectedRyzon;
