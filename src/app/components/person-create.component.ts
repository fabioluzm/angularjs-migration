import * as angular from "angular";

let PersonCreateComponent = {
  selector: "personCreate", // <person-create>
  template: `
    <div class="col-md-8 col-md-offset-2">
      <form class="form-horizontal"
            ng-submit="$ctrl.save()"
            novalidate>
        <div class="panel panel-default">
          <div class="panel-heading">

            {{mode}}

            <div class="pull-right">
              <button class="btn btn-primary btn-sm"
                      ladda="$ctrl.contacts.isSaving"
                      type="submit">Create
              </button>
            </div>
            <div class="clearfix"></div>

          </div>
          <div class="panel-body">
            <ng-include src="'templates/form.html'"></ng-include>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-8 col-md-offset-2">
      <form class="form-horizontal"
            ng-submit="$ctrl.save()"
            novalidate>
        <div class="panel panel-default">
          <div class="panel-heading">

            {{mode}}

            <div class="pull-right">
              <button class="btn btn-primary btn-sm"
                      ladda="$ctrl.contacts.isSaving"
                      type="submit">Create
              </button>
            </div>
            <div class="clearfix"></div>

          </div>
          <div class="panel-body">
            <ng-include src="'templates/form.html'"></ng-include>
          </div>
        </div>
      </form>
    </div>
  `,
  bindings: {},
  controller: class PersonCreateController {
    public contacts;
    public person = {};

    private $state;

    constructor($state, ContactService) {
      this.$state = $state;
      this.contacts = ContactService;
    }

    save() {
      console.log("createContact");
      this.contacts.createContact(this.person).then(() => {
        this.$state.go("list");
      });
    }
  },
};

angular
  .module("codecraft")
  .component(PersonCreateComponent.selector, PersonCreateComponent);
