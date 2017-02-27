reporting.EnterpriseListView = Backbone.View.extend({

    tagName:'table',

    className:'table table-striped',

    initialize: function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (enterprise) {
            self.$el.append(new reporting.EnterpriseListItemView({model:enterprise}).render().el);
        });
    },

    render: function () {
        this.$el.empty();
        this.$el.html(this.template());
        _.each(this.model.models, function (enterprise) {
            this.$el.tbody.append(new reporting.EnterpriseListItemView({model:enterprise}).render().el);
        }, this);
        return this;
    }
});