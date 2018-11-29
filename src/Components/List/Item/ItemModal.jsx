import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { item, categories, onEditItem } = this.props;
    return (
      <div>
        <span className="edit-container" onClick={this.toggle}>
          <i className="fa fa-edit" />
        </span>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update Item:</ModalHeader>
          <ModalBody>
            <form onSubmit={e => onEditItem(e, item.id)}>
              <div className="form-group">
                <label htmlFor="itemName" className="col-form-label">
                  Item Name:
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="itemName"
                  defaultValue={item.itemName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemCategory">Item Category:</label>
                <select
                  className="form-control form-control-lg"
                  name="itemCategory"
                  id="itemCategory"
                  defaultValue={item.itemCategory}
                >
                  {categories.map(category => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="modal-footer">
                <Button type="button" color="secondary" onClick={this.toggle}>
                  Close
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  id="update-item-button"
                  onClick={this.toggle}
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ItemModal;
