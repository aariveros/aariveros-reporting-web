reporting.EnterpriseSummaryView = Backbone.View.extend({

    initialize:function () {
        this.model.on("change", this.render, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.append(new reporting.ReportEnterpriseProjectsEvolutionView().render().el);
        this.$el.append(new reporting.ReportEnterpriseTasksDistributionView().render().el);
        return this;
    }

});