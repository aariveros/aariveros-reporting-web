var reporting = {

    views: {},

    models: {},

    loadTemplates: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (reporting[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    reporting[view].prototype.template = _.template(data);
                }, 'html'));
            } else {
                alert(view + " not found");
            }
        });
        
        $.when.apply(null, deferreds).done(callback);
    }

};

reporting.Router = Backbone.Router.extend({

    routes: {
        "":                 "home",
        "enterprises/:id":    "enterpriseDetails",
        "projects/:id":    "projectDetails",
        "employees/:id":    "employeeDetails"
    },

    initialize: function () {
        reporting.shellView = new reporting.ShellView();
        $('body').html(reporting.shellView.render().el);
        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
        this.$content = $("#content");
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!reporting.homelView) {
            reporting.homelView = new reporting.HomeView();
            reporting.homelView.render();
        } else {
            console.log('reusing home view');
            reporting.homelView.delegateEvents(); // delegate events when the view is recycled
        }
        this.$content.html(reporting.homelView.el);
    },

    enterpriseDetails: function (id) {
        var enterprise = new reporting.Enterprise({enterpriseId: id});
        var self = this;
        enterprise.fetch({
            success: function (data) {
                console.log(data);
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                self.$content.html(new reporting.EnterpriseView({model: data}).render().el);
            }
        });
    },

    projectDetails: function (id) {
        var project = new reporting.Project({projectId: id});
        var self = this;
        project.fetch({
            success: function (data) {
                console.log(data);
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                self.$content.html(new reporting.ProjectView({model: data}).render().el);
            }
        });
    },

    employeeDetails: function (id) {
        var employee = new reporting.Employee({employeeId: id});
        var self = this;
        employee.fetch({
            success: function (data) {
                console.log(data);
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                self.$content.html(new reporting.EmployeeView({model: data}).render().el);
            }
        });
    }

});

$(document).ready(function () {
    console.log('reusing home view');

    reporting.loadTemplates(
        [
            "HomeView", 
            "ShellView", 
            
            "EnterpriseListView", 
            "EnterpriseListItemView",
            "EnterpriseView", 
            "EnterpriseSummaryView" ,
            "EnterpriseProjectsView" ,

            "ProjectListItemView",
            "ProjectView", 
            "ProjectSummaryView",
            "EnterpriseEmployeesView", 

            "EmployeeListItemView",
            "EmployeeView",
            "EmployeeSummaryView", 

            "ReportEnterpriseProjectsEvolutionView",
            "ReportEnterpriseTasksDistributionView"
        ],
        function () {
            reporting.router = new reporting.Router();
            Backbone.history.start();
        });
});
