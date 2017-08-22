import React from 'react'
import ViewContactsHeader from '../containers/view-contacts-header'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { getContacts } from '../db'

const li = contact => {
  return (
    <div>
      <main className="mw6 center avenir">
        <article className="dt w-100 bb b--black-05 pb2 pt1" href="#0">
          <div className="dtc w2 w3-ns v-mid">
            <img
              src={contact.photo}
              alt=""
              className="ba b--black-10 bg-white db br2 w2 w3-ns h2 h3-ns"
            />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">
              {contact.firstName} {contact.lastName}{' '}
            </h1>
            <h2 className="f6 fw4 mt0 mb0 black-60">{contact.company}</h2>
          </div>
          <div className="dtc v-mid">
            <form className="w-100 tr">
              <Link
                className="link black-60"
                to={`/profiles/${contact.profileId}/contacts/${contact._id}`}
              >
                <button
                  className="f6 button-reset bg-white ba b--black-20 dim pointer pv1 black-60"
                  type="button"
                >
                  Details
                </button>
              </Link>
            </form>
          </div>
        </article>
      </main>
    </div>
  )
}

class Contacts extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.id
    this.props.dispatch(getContacts(profileId))
  }

  render() {
    return (
      <div>
        <ViewContactsHeader profileId={this.props.match.params.id} />
        <div className="bg-light-gray">
          <list>

            {this.props.contacts === []
              ? <div className="pa4 mt4 mb4 ">
                  <h1 className=" avenir fw4 tc fw6 lh-title black mv0 ">
                    There are no contacts to view at this time
                  </h1>
                </div>
              : map(li, this.props.contacts)}

          </list>
        </div>
        <Footer />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

const connector = connect(mapStateToProps)

export default connector(Contacts)
