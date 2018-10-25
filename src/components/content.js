import React from 'react'
import styles from "./content.module.css"
import PropTypes from 'prop-types'
import { Contact } from '../pages/contact';
import { About } from '../pages/about';

export const Content = props => {
    return (
        <div id="content" className={ `${ styles.content }` }>
            <div className={ styles.left }>
                <div className={ `${ styles.leftOuterLayer } ${ props.moveToRight ? styles.moveToRight : styles.resetTransform }` }>
                    content left
                </div>
                { props.moveToRight ? <About/> : false }
            </div>

            <div className={ styles.right }>
                <div className={ `${ styles.rightOuterLayer } ${ props.moveToLeft ? styles.moveToLeft : styles.resetTransform }` }>
                    content right
                </div>
                { props.moveToLeft ? <Contact/> : false }
            </div>
        </div>
    );
};


Content.propTypes = {
    moveToRight: PropTypes.bool.isRequired,
    moveToLeft: PropTypes.bool.isRequired,
};