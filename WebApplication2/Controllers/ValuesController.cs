using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers
{
  public class Test
  {
    public string X { get; set; }
    public int number { get; set; }
  }

  public class Contact
  {
    public int id { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string email { get; set; }
    public string phoneNumber { get; set; }
  }


  [Route("api/[controller]/[action]")]
    public class ValuesController : Controller
    {
    private static readonly List<string> values = new List<string>(new[] { "value1", "value2" });
    private static readonly List<int> numbers = new List<int>(new[] { 1337, 42, 9001, 80085 });

    private static readonly List<string> firstName = new List<string>(new[] { "Redmar" });
    private static readonly List<string> lastName = new List<string>(new[] { "van de Riet" });
    private static readonly List<string> email = new List<string>(new[] { "redmar@mail.nk" });
    private static readonly List<string> phoneNumber = new List<string>(new[] { "555-1234" });

    // GET api/values
    [HttpPost]
    public IEnumerable<string> Values()
    {
      return values;
    }

    [HttpPost]
    public IEnumerable<int> Numbers()
    {
      return numbers;
    }

    [HttpPost]
    public Test GetNumber([FromBody] int id)
    {
      return new Test { number = numbers[id] };
    }

    [HttpPost]
    public Test GetValue([FromBody] int id)
    {
      return new Test { X = values[id] };
    }

    [HttpPost]
    public void AddNumber([FromBody]int number)
    {
      numbers.Add(number);
    }

    [HttpPost]
    public void AddValue([FromBody]string value)
    {
      values.Add(value);
    }

    [HttpPost]
    public List<Contact> GetContacts()
    {
      List<Contact> result = new List<Contact>();

      for (int i = 0; i < firstName.Count; i++)
      {
        result.Add(new Contact
        {
          id = i,
          firstName = firstName[i],
          lastName = lastName[i],
          email = email[i],
          phoneNumber = phoneNumber[i]
        });
      }

      return result;
    }

    [HttpPost]
    public Contact GetContact([FromBody] int id)
    {
      return new Contact {
        id = id,
        firstName = firstName[id],
        lastName = lastName[id],
        email = email[id],
        phoneNumber = phoneNumber[id]
      };
    }

    [HttpPost]
    public void AddContact([FromBody] Contact contact)
    {
      firstName.Add(contact.firstName);
      lastName.Add(contact.lastName);
      email.Add(contact.email);
      phoneNumber.Add(contact.phoneNumber);
    }
  }
}
