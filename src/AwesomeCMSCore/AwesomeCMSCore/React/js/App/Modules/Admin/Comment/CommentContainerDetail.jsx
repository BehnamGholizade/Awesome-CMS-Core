import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, ListGroupItem, TabContent, TabPane} from 'reactstrap';
import moment from 'moment/src/moment';

const CommentContainerDetail = (props) => {
    return (
        <TabContent activeTab={props.activeTab}>
            <TabPane tabId="All" className="commentsTabWrapper">
                <Row>
                    <Col sm="12">
                        {props.comments.allComments
                            ? props
                                .comments
                                .allComments
                                .map(comment => {
                                    return (
                                        <div id="allComments" key={comment.id}>
                                            <ListGroupItem className="commentItem">
                                                <h3>{comment.content}</h3>
                                                <h6>{moment(comment.dateCreated).format('DD MMMM YYYY')}</h6>
                                            </ListGroupItem>
                                        </div>
                                    )
                                })
                            : null}
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="Pending" className="commentsTabWrapper">
                <Row>
                    <Col sm="12">
                        {props.comments.pendingComments
                            ? props
                                .comments
                                .pendingComments
                                .map(comment => {
                                    return (
                                        <div id="pendingComments" key={comment.id}>
                                            <ListGroupItem className="commentItem">
                                                <h3>{comment.content}</h3>
                                                <h6>{moment(comment.dateCreated).format('DD MMMM YYYY')}</h6>
                                            </ListGroupItem>
                                        </div>
                                    )
                                })
                            : null}
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="Approved" className="commentsTabWrapper">
                <Row>
                    <Col sm="12">
                        {props.comments.approvedComments
                            ? props
                                .comments
                                .approvedComments
                                .map(comment => {
                                    return (
                                        <div id="approvedComments" key={comment.id}>
                                            <ListGroupItem key={comment.id} className="commentItem">
                                                <h3>{comment.content}</h3>
                                                <h6>{moment(comment.dateCreated).format('DD MMMM YYYY')}</h6>
                                            </ListGroupItem>
                                        </div>
                                    )
                                })
                            : null}
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="Spam" className="commentsTabWrapper">
                <Row>
                    <Col sm="12">
                        {props.comments.spamComments
                            ? props
                                .comments
                                .spamComments
                                .map(comment => {
                                    return (
                                        <div id="spamComments" key={comment.id}>
                                            <ListGroupItem key={comment.id} className="commentItem">
                                                <h3>{comment.content}</h3>
                                                <h6>{moment(comment.dateCreated).format('DD MMMM YYYY')}</h6>
                                            </ListGroupItem>
                                        </div>
                                    )
                                })
                            : null}
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="Trash" className="commentsTabWrapper">
                <Row>
                    <Col sm="12">
                        {props.comments.commentsDeleted
                            ? props
                                .comments
                                .commentsDeleted
                                .map(comment => {
                                    return (
                                        <div id="commentsDeleted" key={comment.id}>
                                            <ListGroupItem key={comment.id} className="commentItem">
                                                <h3>{comment.content}</h3>
                                                <h6>{moment(comment.dateCreated).format('DD MMMM YYYY')}</h6>
                                            </ListGroupItem>
                                        </div>
                                    )
                                })
                            : null}
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
    )
}

CommentContainerDetail.propTypes = {
    comments: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired
}

export default CommentContainerDetail
