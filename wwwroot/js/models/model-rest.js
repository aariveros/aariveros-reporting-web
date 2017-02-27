reporting.urlApi = "http://45.79.220.26:5000/";

reporting.Enterprise = Backbone.Model.extend({

    urlRoot: function () {
        return reporting.urlApi + "enterprises/";
    },

    idAttribute: 'enterpriseId'

});

reporting.EnterpriseCollection = Backbone.Collection.extend({

    model: reporting.Enterprise,

    url: reporting.urlApi + "enterprises"

});

reporting.Project = Backbone.Model.extend({

    urlRoot: function () {
        return reporting.urlApi + "/projects/";
    },

    idAttribute: 'projectId'

});

reporting.ProjectCollection = Backbone.Collection.extend({

    model: reporting.Project,

    url:reporting.urlApi + "projects"

});

reporting.Employee = Backbone.Model.extend({

    urlRoot: function () {
        return reporting.urlApi + "employees/";
    },

    idAttribute: 'employeeId'

});

reporting.EmployeeCollection = Backbone.Collection.extend({

    model: reporting.Employee,

    url: reporting.urlApi + "employees"

});