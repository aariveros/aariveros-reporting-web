reporting.Enterprise = Backbone.Model.extend({

    urlRoot: function () {
        return "http://localhost:5000/enterprises/";
    },

    idAttribute: 'enterpriseId'

});

reporting.EnterpriseCollection = Backbone.Collection.extend({

    model: reporting.Enterprise,

    url:"http://localhost:5000/enterprises"

});

reporting.Project = Backbone.Model.extend({

    urlRoot: function () {
        return "http://localhost:5000/projects/";
    },

    idAttribute: 'projectId'

});

reporting.ProjectCollection = Backbone.Collection.extend({

    model: reporting.Project,

    url:"http://localhost:5000/projects"

});

reporting.Employee = Backbone.Model.extend({

    urlRoot: function () {
        return "http://localhost:5000/employees/";
    },

    idAttribute: 'employeeId'

});

reporting.EmployeeCollection = Backbone.Collection.extend({

    model: reporting.Employee,

    url:"http://localhost:5000/employees"

});