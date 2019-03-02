import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


import Home from './Home';
import Finish from './Finish';
import UntimelyLoginResponse from './UntimelyLoginResponse';
import OrderSummary from './OrderSummary';
import NotFound from './NotFound';
import ChooseMeals from './ChooseMeals';

import Modal from '../Containers/Modal';

import ChooseDinnersButton from '../Cart/ChooseDinnersButton';
import FinishButton from '../Cart/FinishButton';
import ChooseLunchesButton from '../Cart/ChooseLunchesButton';
import CartStatusBar from '../Cart/CartStatusBar';


class App extends Component {

    state = {
        modalVisibility: "",
        modalContent: "",
        orderWillBePlacedAtTime: "12:00 PM",
        orderWillBePlacedOn: "Wednesday, September 30",
        helpContactPhoneNumber: "1-800-GET-HELP",
        meals: [
            {
                id: "5",
                name: "BBQ",
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
                id: "1",
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
                id: "2",
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
                id: "3",
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
            },
            {
                id: "4",
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
                id: "6",
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
            },
            {
                id: "8",
                name: "Fruit Salad",
                desc: "The say that beauty is in the eye of the beholder. Let your belly exult and rejoice in the presence of this masterpiece",
                imgSrc: "https://i.imgur.com/gVWtQ4s.jpg",
                ingredients: [
                    {
                        id: "29",
                        name: "Strawberries",
                        imgSrc: "https://i.imgur.com/ireha27.jpg"
                    },
                    {
                        id: "30",
                        name: "Mango",
                        imgSrc: "https://i.imgur.com/VzOVW8L.jpg"
                    },
                    {
                        id: "31",
                        name: "Blackberries",
                        imgSrc: "https://i.imgur.com/vJfrhUl.jpg"
                    },
                    {
                        id: "32",
                        name: "Almonds",
                        imgSrc: "https://i.imgur.com/9dRbn5B.jpg"
                    },
                    {
                        id: "33",
                        name: "Blueberries",
                        imgSrc: "https://i.imgur.com/U1xgVIX.jpg"
                    }
                ]
            },
            {
                id: "9",
                name: "Salad",
                desc: "Get lean, get mean, eat more green",
                imgSrc: "https://i.imgur.com/9AEWqem.jpg",
                ingredients: [
                    {
                        id: "25",
                        name: "Assorted Greens",
                        imgSrc: "https://i.imgur.com/8INXHUm.jpg"
                    },
                    {
                        id: "34",
                        name: "Feta Cheese",
                        imgSrc: "https://i.imgur.com/OJHamCh.jpg"
                    },
                    {
                        id: "35",
                        name: "Onions",
                        imgSrc: "https://i.imgur.com/9Adt4Vz.jpg"
                    },
                    {
                        id: "24",
                        name: "Tomatoes",
                        imgSrc: "https://i.imgur.com/x6rpufQ.jpg"
                    }
                ]
            }
        ],
        lunchCart: {
            item1: null,
            item2: null,
            item3: null,
            item4: null,
            item5: null,
            item6: null,
            item7: null,

        },
        dinnerCart: {
            item1: null,
            item2: null,
            item3: null,
            item4: null,
            item5: null,
            item6: null,
            item7: null,
        },
    }

    componentDidMount() {
        const lunchCartLocalStorageRef = localStorage.getItem('mah.lunchCart');
        const dinnerCartLocalStorageRef = localStorage.getItem('mah.dinnerCart');

        if (lunchCartLocalStorageRef) {
            this.setState({lunchCart: JSON.parse(lunchCartLocalStorageRef)});
        }
        if (dinnerCartLocalStorageRef) {
            this.setState({dinnerCart: JSON.parse(dinnerCartLocalStorageRef)});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('mah.lunchCart', JSON.stringify(this.state.lunchCart));
        localStorage.setItem('mah.dinnerCart', JSON.stringify(this.state.dinnerCart));
    }

    render() {

        return (
            <Fragment>
                <HashRouter>
                    <Switch>
                        <Route exact path="/"
                            render={(routeProps) => <Home {...routeProps} showHelp={this.showModal} helpContactPhone={this.state.helpContactPhoneNumber}/>} />

                        <Route exact path="/Finish"
                            render={(routeProps) => <Finish {...routeProps} showHelp={this.showModal} helpContactPhone={this.state.helpContactPhoneNumber} />} />

                        <Route exact path="/UntimelyLoginResponse"
                            render={(routeProps) => <UntimelyLoginResponse {...routeProps} showHelp={this.showModal} helpContactPhone={this.state.helpContactPhoneNumber} />} />

                        <Route exact path="/OrderSummary"
                            render={(routeProps) => <OrderSummary {...routeProps} showHelp={this.showModal} showMealDetails={this.showModal} helpContactPhone={this.state.helpContactPhoneNumber}/>} />                        

                        <Route exact path="/ChooseLunches"
                            render={(routeProps) =>
                                <ChooseMeals
                                    {...routeProps}
                                    showHelp={this.showModal}
                                    helpContactPhone={this.state.helpContactPhoneNumber}
                                    cart={{
                                        name: "lunchCart",
                                        mealTime: "Lunch",
                                        items: this.state.lunchCart,
                                        getMaxSize: this.getMaxCartSize,
                                        getCurrentSize: this.getCurrentCartSize,
                                        isFull: this.isCartFull,
                                        isEmpty: this.isCartEmpty,
                                        removeItem: this.removeFromCart,
                                        addItem: this.addToCart,
                                    }}    
                                    orderWillBePlacedOn={this.state.orderWillBePlacedOn}                         
                                    meals={this.state.meals}   
                                    showMealDetails={this.showModal}
                                    fullCartActions={
                                        <ChooseDinnersButton action={routeProps.history.push}/>
                                    }    
                                />
                            }
                        />

                        <Route exact path="/ChooseDinners"
                            render={(routeProps) =>
                                <ChooseMeals
                                    {...routeProps}
                                    showHelp={this.showModal}
                                    helpContactPhone={this.state.helpContactPhoneNumber}
                                    cart={{
                                        name: "dinnerCart",
                                        mealTime: "Dinners",
                                        items: this.state.dinnerCart,
                                        getMaxSize: this.getMaxCartSize,
                                        getCurrentSize: this.getCurrentCartSize,
                                        isFull: this.isCartFull,
                                        isEmpty: this.isCartEmpty,
                                        removeItem: this.removeFromCart,
                                        addItem: this.addToCart,
                                    }}                        
                                    orderWillBePlacedOn={this.state.orderWillBePlacedOn}     
                                    meals={this.state.meals}   
                                    showMealDetails={this.showModal}
                                    fullCartActions={
                                        <Fragment>
                                            <ChooseLunchesButton action={routeProps.history.push}/>
                                            <FinishButton  
                                                action={this.showModal}
                                                orderWillBePlacedAtTime={this.state.orderWillBePlacedAtTime}
                                                orderWillBePlacedOn={this.state.orderWillBePlacedOn}
                                                confirmSelectionAction={routeProps.history.push}
                                                afterSelectionConfirmation={this.hideModal}/>
                                        </Fragment>
                                    }   
                                    fullCartActionsJustify={CartStatusBar.FullCartActionsJustify.SpaceBetween} 
                                />
                            }
                        />

                        <Route render={(routeProps) => <NotFound {...routeProps} showHelp={this.showModal} helpContactPhone={this.state.helpContactPhoneNumber} />} />

                    </Switch>
                </HashRouter>
                <Modal
                    displayStatus={this.state.modalVisibility}
                    bodyContent={this.state.modalContent}
                    disappearModal={this.disappearModal}
                    hideModal={this.hideModal}>
                </Modal>
            </Fragment>
        );
    }


    // Cart functions
    getMaxCartSize = (whichCart) => {
        return Object.keys(this.state[whichCart]).length;
    }

    getCurrentCartSize = (whichCart) => {
        return Object
            .keys(this.state[whichCart])
            .map(key => this.state[whichCart][key])
            .filter(x => x !== null).length;
    }

    isCartFull = (whichCart) => {
        return this.getMaxCartSize(whichCart) === this.getCurrentCartSize(whichCart);
    }

    isCartEmpty = (whichCart) => {
        return this.getCurrentCartSize(whichCart) === 0;
    }

    removeFromCart = (whichCart, slot) => {
        let cart = { ...this.state[whichCart] };
        cart[slot] = null;
        this.setState({ [whichCart]: cart });
    }

    addToCart = (whichCart, key) => {
        // Find the item in state.meals
        const mealItem = this.state.meals[key];

        // Find the open slots in the cart
        const openSlots = Object
            .keys(this.state[whichCart])
            .map(cKey => { return { key: cKey, value: this.state[whichCart][cKey] } })
            .filter(slot => slot.value === null);

        if (openSlots.length > 0) {
            const firstOpenSlotKey = openSlots[0].key;

            // Add to cart
            let cart = { ...this.state[whichCart] };
            cart[firstOpenSlotKey] = mealItem;

            this.setState({ [whichCart]: cart });
        }
    }
    // End cart functions


    // Modal functions
    hideModal = () => {
        this.setState({ modalVisibility: "hide" });
    }

    disappearModal = () => {
        if (this.state.modalVisibility === "hide") {
            this.setState({ modalVisibility: "" });
        }
    }

    showModal = (content = "") => {
        this.setState({
            modalVisibility: "show",
            modalContent: content
        });
    }
    // End Modal functions
}

export default App;
