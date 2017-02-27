reporting.EnterpriseProjectsView = Backbone.View.extend({

    tagName:'table',

    className:'table table-striped',

    initialize: function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (project) {
            self.$el.append(new reporting.ProjectListItemView({model:project}).render().el);
        });
    },

    render: function () {
        this.$el.empty();
        this.$el.html(this.template());
        _.each(this.model.models, function (project) {
            this.$el.append(new reporting.ProjectListItemView({model:project}).render().el);
        }, this);
        return this;
    }
});