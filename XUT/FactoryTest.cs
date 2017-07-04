using System;
using BE;
using Xunit;

namespace XUT
{
    public class FactoryTest
	{
		[Fact]
		public void InitializeFactory()
		{
			var factory = new PersonFactory();
		}

		[Fact]
		public void Add()
		{
            var factory = new PersonFactory();

			var person = new Person()
			{
				Id = 1,
				FirstName = "Test",
				LastName = "Person",
				EmailAddress = "test@person.com",
				DateOfBirth = new DateTime(1991, 01, 01),
				Nationality = "British"
			};

            factory.AddPerson(person);
		}

		[Fact]
		public void GetAll()
		{
			var factory = new PersonFactory();

            if (factory.GetAllPersons() == null)
                throw new Exception();
		}

		[Fact]
		public void Update()
        {
			var factory = new PersonFactory();

			var id = 1;
			var person = new Person()
			{
				Id = 1,
				FirstName = "Test",
				LastName = "Person",
				EmailAddress = "test@person.com",
				DateOfBirth = new DateTime(1991, 01, 01),
				Nationality = "French"
			};

            if (!factory.UpdatePerson(id, person))
                throw new Exception();
		}

		[Fact]
		public void Get()
		{
			var factory = new PersonFactory();

			var id = 1;

			if (factory.GetPerson(id) == null)
				throw new Exception();
		}

		[Fact]
		public void Delete()
		{
			var factory = new PersonFactory();

			var id = 1;

            if (!factory.DeletePerson(id))
				throw new Exception();
		}
	}
}
