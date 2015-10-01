using Newtonsoft.Json.Serialization;
using System.Web.Http;


namespace Airlines.Web.AppStart
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            //serialize the properties like JS properties
            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;
            settings.Formatting = Newtonsoft.Json.Formatting.Indented;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate:"api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional}
                );
        }
    }
}
