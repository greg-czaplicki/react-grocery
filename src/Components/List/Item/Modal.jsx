import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { categories, item, onEditItem } = this.props;
    return (
      <div
        className="modal fade"
        id={"item" + item.id}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Item
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={e => onEditItem(e)}>
                <div className="form-group">
                  <label htmlFor="itemName" className="col-form-label">
                    Item Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete Item
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
