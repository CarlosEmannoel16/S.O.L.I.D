interface Movie {
   increaseVolume(): {}
   play(): {}
}
class CaptainAmerican implements Movie {
  
  increaseVolume(): {} {
    throw new Error("Method not implemented.");
  }
  play(): {} {
    throw new Error("Method not implemented.");
  }
}




class ModernsTimes implements Movie {
  
  increaseVolume(): {} {
    throw new Error("Method not implemented.");
  }
  play(): {} {
    throw new Error("Method not implemented.");
  }
}
/////////////////////////////////////////////
///Maneira Correta de implementar
interface IMovie {
  play(): void;
}

interface IAudioControl {
  increaseVolume(): void;
}



class ModernsTimes2 implements IMovie {
  play(): void {
    throw new Error("Method not implemented.");
  }
}

class CaptainAmerican2 implements IMovie, IAudioControl {
  increaseVolume(): void {
    throw new Error("Method not implemented.");
  }
  play(): void {
    throw new Error("Method not implemented.");
  }
}

const movie = new CaptainAmerican();
