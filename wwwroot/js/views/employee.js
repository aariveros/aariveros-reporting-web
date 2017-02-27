reporting.EmployeeView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        $('#summary', this.el).html(new reporting.EmployeeSummaryView({model:this.model}).render().el);
        
        return this;
    }
});