reporting.EnterpriseView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template());
        
        var enterpriseId = this.model.attributes.enterpriseId;

        // $('#hierarchy').append('<li><a href="#enterprises/' + enterpriseId + '">Enterprise</a></li>');
    
        var projects = new reporting.ProjectCollection(this.model.attributes.projects);
        var employees = new reporting.EmployeeCollection(this.model.attributes.employees);

        $('#summary', this.el).html(new reporting.EnterpriseSummaryView({model:this.model}).render().el);
        $('#projects', this.el).html(new reporting.EnterpriseProjectsView({model:projects}).render().el);
        $('#employees', this.el).html(new reporting.EnterpriseEmployeesView({model:employees}).render().el);

        /*this.model.reports.fetch({
            success:function (data) {
                if (data.length == 0)
                    $('.no-reports').show();
            }
        });
        $('#reports', this.el).append(new reporting.EmployeeListView({model:this.model.reports}).render().el);*/
        return this;
    }
});