using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class Kata
{
    public IEnumerable<ChromosomeWrap> MapPopulationFit(IEnumerable<string> population, Func<string, double> fitness)
    {
        return population.Select(c => new ChromosomeWrap() {
            Fitness = fitness(c),
            Chromosome = c
        });
    }

    public class ChromosomeWrap {
        public string Chromosome { get; set;}
        public double Fitness { get; set; }
    }
}