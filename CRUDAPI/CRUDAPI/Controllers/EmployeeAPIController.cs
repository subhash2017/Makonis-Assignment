using System;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using CRUDAPI.Models;
using Newtonsoft.Json;

namespace CRUDAPI.Controllers
{
    [RoutePrefix("Api/Employee")]
    public class EmployeeAPIController : ApiController
    {
        
        [HttpPost]
        [Route("InsertEmployeeDetails")]
        public IHttpActionResult PostEmaployee(EmployeeDetail data)
        {
            try
            {

                var jsonData = JsonConvert.SerializeObject(data);


                    string fileName = @"C:\Temp\Temp.txt";
               
                    using (var writer = File.CreateText(fileName))
                    {
                        writer.WriteLine(jsonData);
                    }

                return Ok();

            }
            catch(Exception)
            {
                return InternalServerError();
            }
        }
    }
}
