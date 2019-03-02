import React, { Component, Fragment } from 'react';
import AppBar from '../Containers/AppBar';
import MainContainer from '../Containers/MainContainer';
import ContentContainer from '../Containers/ContentContainer';

import HelpButton from '../Buttons/HelpButton';
import BackHomeButton from '../Buttons/BackHomeButton';
import SectionDivider from "../SectionDivider";

import BottomSheet from '../Containers/BottomSheet';
import GenericHeading from '../GenericHeading';
import GenericMessageWithPictureAndHeading from '../GenericMessageWithPictureAndHeading';

import MealTimeHeader from '../OrderSummary/MealTimeHeader';
import MealsContainer from '../OrderSummary/MealsContainer';
import Meal from '../OrderSummary/Meal';

import processing from '../../images/processing.svg';

import { CSSTransition } from 'react-transition-group';
import '../../css/transitions.css';
import { animationOptions } from '../../helpers';

import tumbleweed from '../../images/tumbleweed.svg';

class OrderSummary extends Component {

    state = {
        meals: {
            lunches: [{
                id: "2",
                count: 2,
                name: "Three-Meat Cheesy Pizza",
                desc: "Whether for lunch, dinner, or just a snack, this triply meaty and delectably cheesy pizza hits all the right spots",
                imgSrc: "https://i.imgur.com/5iyBDNC.jpg",
                ingredients: [
                    {
                        id: "6",
                        name: "Mozzarella Cheese",
                        imgSrc: "https://i.imgur.com/7ycHDgJ.jpg"
                    },
                    {
                        id: "7",
                        name: "Sausages",
                        imgSrc: "https://i.imgur.com/52OuBRl.jpg"
                    },
                    {
                        id: "8",
                        name: "Pepperoni",
                        imgSrc: "https://i.imgur.com/80CD2YH.jpg"
                    },
                    {
                        id: "9",
                        name: "Bacon",
                        imgSrc: "https://i.imgur.com/khYtsZP.jpg"
                    },
                    {
                        id: "5",
                        name: "Flour",
                        imgSrc: "https://i.imgur.com/IxxMF0L.jpg"
                    }
                ]
            },
            {
                id: "1",
                count: 2,
                name: "Cupcakes with Sprinkles",
                desc: "Kick back and take it easy with these overindulgent cupcakes. Enjoy it, but not too much. We don’t want to get the beetus now, do we?",
                imgSrc: "https://i.imgur.com/m9z4v7f.jpg",
                ingredients: [
                    {
                        id: "1",
                        name: "Milk",
                        imgSrc: "https://i.imgur.com/mgTvI9x.jpg"
                    },
                    {
                        id: "2",
                        name: "Sugar",
                        imgSrc: "https://i.imgur.com/9EtXbSI.jpg"
                    },
                    {
                        id: "3",
                        name: "Sprinkles",
                        imgSrc: "https://i.imgur.com/mKQSmez.jpg"
                    },
                    {
                        id: "4",
                        name: "Eggs",
                        imgSrc: "https://i.imgur.com/U7aksE2.jpg"
                    },
                    {
                        id: "5",
                        name: "Flour",
                        imgSrc: "https://i.imgur.com/IxxMF0L.jpg"
                    }
                ]
            },
            {
                id: "3",
                count: 3,
                name: "Very Meaty Stir-fry",
                desc: "Comfort comes in many forms and flavors, and this gastronomic delight will cozy you right up",
                imgSrc: "https://i.imgur.com/IcoyGGp.jpg",
                ingredients: [
                    {
                        id: "10",
                        name: "Chicken",
                        imgSrc: "https://i.imgur.com/6JqK3Nr.jpg"
                    },
                    {
                        id: "11",
                        name: "Ham",
                        imgSrc: "https://i.imgur.com/DnhG541.jpg"
                    },
                    {
                        id: "12",
                        name: "Bell Peppers",
                        imgSrc: "https://i.imgur.com/0ymkgKM.jpg"
                    },
                    {
                        id: "13",
                        name: "Squash",
                        imgSrc: "https://i.imgur.com/SBr8v56.jpg"
                    },
                    {
                        id: "14",
                        name: "Carrots",
                        imgSrc: "https://i.imgur.com/POaMmoK.jpg"
                    },
                    {
                        id: "7",
                        name: "Sausages",
                        imgSrc: "https://i.imgur.com/52OuBRl.jpg"
                    }
                ]
            },],
            dinners: [{
                id: "4",
                count: 3,
                name: "Spaghetti with Meat Sauce",
                desc: "The quintessential No.1 of Italian cuisine. Now, twirl that fork",
                imgSrc: "https://i.imgur.com/SNHwRHl.jpg",
                ingredients: [
                    {
                        id: "15",
                        name: "Spaghetti",
                        imgSrc: "https://i.imgur.com/zGH0ZEw.jpg"
                    },
                    {
                        id: "16",
                        name: "Ground Beef",
                        imgSrc: "https://i.imgur.com/y7ki2gm.jpg"
                    },
                    {
                        id: "17",
                        name: "Marinara Sauce",
                        imgSrc: "https://i.imgur.com/Tr80Fcq.jpg"
                    },
                    {
                        id: "18",
                        name: "Basil Leaves",
                        imgSrc: "https://i.imgur.com/qvFxiL5.jpg"
                    }
                ]
            },
            {
                id: "5",
                name: "BBQ",
                count: 2,
                desc: "A taste of a heaven on Earth just waiting for you to tuck into it. Don't wait too long",
                imgSrc: "https://i.imgur.com/KY8tkeQ.jpg",
                ingredients: [
                    {
                        id: "19",
                        name: "Beef Steak",
                        imgSrc: "https://i.imgur.com/r0u2heo.jpg"
                    },
                    {
                        id: "20",
                        name: "Buns",
                        imgSrc: "https://i.imgur.com/zBCvMPD.jpg"
                    },
                    {
                        id: "21",
                        name: "Coleslaw",
                        imgSrc: "https://i.imgur.com/CLwNYkH.jpg"
                    },
                    {
                        id: "22",
                        name: "Cheese",
                        imgSrc: "https://i.imgur.com/0ISHUqJ.jpg"
                    },
                    {
                        id: "23",
                        name: "Steak Fries",
                        imgSrc: "https://i.imgur.com/j7ieIbj.jpg"
                    }
                ]
            },
            {
                id: "6",
                count: 1,
                name: "Salmon and Greens",
                desc: "You know you want to. So go ahead, be the bear",
                imgSrc: "https://i.imgur.com/jLXEVTX.jpg",
                ingredients: [
                    {
                        id: "26",
                        name: "Salmon",
                        imgSrc: "https://i.imgur.com/Iji3kXo.jpg"
                    },
                    {
                        id: "24",
                        name: "Tomatoes",
                        imgSrc: "https://i.imgur.com/x6rpufQ.jpg"
                    },
                    {
                        id: "25",
                        name: "Assorted Greens",
                        imgSrc: "https://i.imgur.com/8INXHUm.jpg"
                    }
                ]
            },
            {
                id: "7",
                count: 1,
                name: "Juicy Steak with Veggies",
                desc: "Blessed be the cow that gave its life so that we may partake of this bounteous feast - 21st Century prayer",
                imgSrc: "https://i.imgur.com/3VW06Un.jpg",
                ingredients: [
                    {
                        id: "19",
                        name: "Beef Steak",
                        imgSrc: "https://i.imgur.com/r0u2heo.jpg"
                    },
                    {
                        id: "14",
                        name: "Carrots",
                        imgSrc: "https://i.imgur.com/POaMmoK.jpg"
                    },
                    {
                        id: "27",
                        name: "Broccoli",
                        imgSrc: "https://i.imgur.com/9nRrSFg.jpg"
                    },
                    {
                        id: "28",
                        name: "Asparagus",
                        imgSrc: "https://i.imgur.com/Ou2SHdI.jpg"
                    }
                ]
            },]
        }
    }

    render() {
        return (
            <Fragment>
                <AppBar
                    left={<BackHomeButton action={this.props.history.push} />}
                    right={<HelpButton action={this.props.showHelp} contactPhone={this.props.helpContactPhone} />} />
                <MainContainer>
                    <CSSTransition in={true} appear={true} {...animationOptions.slideUp}>
                        <ContentContainer
                            topContent={
                                <GenericHeading
                                    imgSrc={processing}
                                    imgAlt="Order Summary"
                                    headingText="Order Summary"
                                />
                            }
                            bottomContent={
                                <BottomSheet>
                                    {
                                        this.state.meals && Object.keys(this.state.meals).length > 0 ? (
                                            <div className="row">
                                                <div className="col-sm-4 col-lg-4" style={{ paddingBottom: '0.5rem' }}>
                                                    <MealTimeHeader label="Lunch" />
                                                    <MealsContainer>
                                                        {
                                                            Object.keys(this.state.meals.lunches)
                                                                .map(key =>
                                                                    <Meal
                                                                        key={key}
                                                                        showMealDetails={this.props.showMealDetails}
                                                                        {...this.state.meals.lunches[key]}
                                                                    />
                                                                )
                                                        }
                                                    </MealsContainer>
                                                    <SectionDivider noOutline={true} />
                                                </div>
                                                <div className="col-sm-4 col-lg-4" style={{ paddingBottom: '0.5rem' }}>
                                                    <MealTimeHeader label="Dinner" />
                                                    <MealsContainer>
                                                        {
                                                            Object.keys(this.state.meals.dinners)
                                                                .map(key =>
                                                                    <Meal
                                                                        key={key}
                                                                        showMealDetails={this.props.showMealDetails}
                                                                        {...this.state.meals.dinners[key]}
                                                                    />
                                                                )
                                                        }
                                                    </MealsContainer>
                                                    <SectionDivider noOutline={true} />
                                                </div>
                                            </div>
                                        ) : (
                                                <GenericMessageWithPictureAndHeading
                                                    imgSrc={tumbleweed.svg}
                                                    imgAlt="Sad Tumbleweed"
                                                    headingText="Nothing here right now"
                                                    messageText="Check back after your first order is placed"
                                                />
                                            )
                                    }
                                </BottomSheet>
                            }

                        />
                    </CSSTransition>
                </MainContainer>
            </Fragment>

        );
    }
}

export default OrderSummary;