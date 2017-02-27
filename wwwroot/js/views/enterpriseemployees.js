reporting.EnterpriseEmployeesView = Backbone.View.extend({

    tagName:'table',

    className:'table table-striped',

    initialize: function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (employee) {
            self.$el.append(new reporting.EmployeeListItemView({model:employee}).render().el);
        });
    },

    render: function () {
        this.$el.empty();
        this.$el.html(this.template());
        _.each(this.model.models, function (employee) {
            this.$el.append(new reporting.EmployeeListItemView({model:employee}).render().el);
        }, this);
        return this;
    }
});