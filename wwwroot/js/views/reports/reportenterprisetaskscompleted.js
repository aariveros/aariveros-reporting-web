reporting.ReportEnterpriseTasksCompletedView = Backbone.View.extend({

    tagName:"div",

    initialize:function () {
 
    },

    render:function () {
        this.$el.html(this.template());
        return this;
    }

});