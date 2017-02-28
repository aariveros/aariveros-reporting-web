reporting.ProjectSummaryView = Backbone.View.extend({

    initialize:function () {
        this.model.on("change", this.render, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.append(new reporting.ReportProjectEvolutionView().render().el);
        this.$el.append(new reporting.ReportProjectConstraintsView().render().el);
        return this;
    }

});