import Header from './Header'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IStore } from '../../store/reducers'
import { decrement, increment } from '../../store/actions/init/actions'

const mapStateToProps = (state: IStore) => ({ counter: state.init })

const mapDispatchToProps = (dispatch: Dispatch) => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
