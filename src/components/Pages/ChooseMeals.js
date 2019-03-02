import React, { Component, Fragment } from 'react';
import AppBar from '../Containers/AppBar';
import MainContainer from '../Containers/MainContainer';
import ContentContainer from '../Containers/ContentContainer';


import HelpButton from '../Buttons/HelpButton';
import BackHomeButton from '../Buttons/BackHomeButton';

import BottomSheet from '../Containers/BottomSheet';
import GenericMessageWithPictureAndHeading from '../GenericMessageWithPictureAndHeading';

import MenuDate from '../ChooseMeals/MenuDate';
import MealsGallery from '../ChooseMeals/MealsGallery';
import TopSheet from '../Containers/TopSheet';

import CartArea from '../Cart/CartArea';
import CartStatusBar from '../Cart/CartStatusBar';
import CartGallery from '../Cart/CartGallery';

class ChooseMeals extends Component {

    render() {

        const { cart, meals } = this.props;

        return (
            <Fragment>
                <AppBar
                    left={<BackHomeButton action={this.props.history.push} />}
                    right={<HelpButton action={this.props.showHelp}  contactPhone={this.props.helpContactPhone} />}
                />
                <MainContainer>
                    <ContentContainer shouldAdjustTopContentMinHeight={true}
                        topContent={
                            <TopSheet fixed={true}>
                                <CartArea>
                                    <CartStatusBar
                                        mealTimeLabel={cart.mealTime}
                                        maxCartSize={cart.getMaxSize(cart.name)}
                                        currentCartSize={cart.getCurrentSize(cart.name)}
                                        cartIsFull={cart.isFull(cart.name)}
                                        cartIsEmpty={cart.isEmpty(cart.name)}
                                        fullCartActions={this.props.fullCartActions}
                                        fullCartActionsJustify={this.props.fullCartActionsJustify}
                                    />
                                    <CartGallery
                                        items={cart.items}
                                        removeFromCart={cart.removeItem}
                                        cartName={cart.name}
                                    />
                                </CartArea>
                            </TopSheet>
                        }
                        bottomContent={
                            <BottomSheet>
                                <MenuDate date={this.props.orderWillBePlacedOn} />
                                {
                                    meals && Object.keys(meals).length > 0
                                        ? (<MealsGallery
                                            items={[...meals]}
                                            cartIsFull={cart.isFull(cart.name)}
                                            cartName={cart.name}
                                            addItemToCart={cart.addItem}
                                            showMealDetails={this.props.showMealDetails}
                                        />)
                                        : (<GenericMessageWithPictureAndHeading
                                            imgSrc="/pictures/tumbleweed.svg"
                                            imgAlt="Sad Tumbleweed"
                                            headingText="Nothing here right now"
                                            messageText="Tell whomever's in charge to add some meals"
                                        />)
                                }
                            </BottomSheet>
                        }

                    />
                </MainContainer>
            </Fragment>

        );
    }
}

export default ChooseMeals;