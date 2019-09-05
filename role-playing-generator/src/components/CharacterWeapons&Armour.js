import * as React from 'react';

export default class CharacterWeaponArmourForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            primary: '',
            pdescription: '',
            secondary: '',
            sdescription: '',
            tertiary: '',
            tdescription: '',
            quaternary: '',
            qdescription: '',
            quinary: '',
            qdescription1: '',
            head: '',
            hdescription: '',
            body: '',
            bdescription: '',
            legs: '',
            ldescription: ''

        }
    }

    onChangeField = (field, e) => {
        const state = {}
        state[field] = e.currentTarget.value;

        this.setState(state)
    }


    render() {
        return (
            <div>
                <form>
                    <div id="weaponSec">

                        <label> Primary Weapon: </label>
                        <input onChange={this.onChangeField.bind(this, 'primary')} type="text" value={this.state.primary} />
                        <textarea onChange={this.onChangeField.bind(this, 'pdescription')} type="text" value={this.state.pdescription} />
                        <br />

                        <label> Secondary Weapon: </label>
                        <input onChange={this.onChangeField.bind(this, 'secondary')} type="text" value={this.state.secondary} />
                        <textarea onChange={this.onChangeField.bind(this, 'sdescription')} type="text" value={this.state.sdescription} />
                        <br />

                        <label> Tertiary Weapon: </label>
                        <input onChange={this.onChangeField.bind(this, 'tertiary')} type="text" value={this.state.tertiary} />
                        <textarea onChange={this.onChangeField.bind(this, 'tdescription')} type="text" value={this.state.tdescription} />
                        <br />

                        <label> Quaternary Weapon: </label>
                        <input onChange={this.onChangeField.bind(this, 'quaternary')} type="text" value={this.state.quaternary} />
                        <textarea onChange={this.onChangeField.bind(this, 'qdescription')} type="text" value={this.state.qdescription} />
                        <br />

                        <label> Quinary Weapon: </label>
                        <input onChange={this.onChangeField.bind(this, 'quinary')} type="text" value={this.state.quinary} />
                        <textarea onChange={this.onChangeField.bind(this, 'qdescription1')} type="text" value={this.state.qdescription1} />
                        <br />

                    </div>
                    <div id="armourSec">

                        <label> Armour Head: </label>
                        <input onChange={this.onChangeField.bind(this, 'head')} type="text" value={this.state.head} />
                        <textarea onChange={this.onChangeField.bind(this, 'hdescription')} type="text" value={this.state.hdescription} />
                        <br />

                        <label> Armour Body: </label>
                        <input onChange={this.onChangeField.bind(this, 'body')} type="text" value={this.state.body} />
                        <textarea onChange={this.onChangeField.bind(this, 'bdescription')} type="text" value={this.state.bdescription} />
                        <br />

                        <label> Armour Legs: </label>
                        <input onChange={this.onChangeField.bind(this, 'legs')} type="text" value={this.state.legs} />
                        <textarea onChange={this.onChangeField.bind(this, 'ldescription')} type="text" value={this.state.ldescription} />
                        <br />

                    </div>
                    <button>Save</button>

                </form>

            </div>
        )
    }

}