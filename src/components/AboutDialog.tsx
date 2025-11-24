import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutDialog = ({ open, onOpenChange }: AboutDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-md border-institutional-gold/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins font-semibold text-institutional-gold mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-institutional-gold rounded-full"></span>
            Quem sou eu?
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-foreground/90 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            Sou engenheira e possuo MBA em Governança Corporativa pela Universidade de São Paulo (USP). Fui presidente do Conselho Deliberativo e também Diretora de Saúde da Cassi, atuando firmemente na defesa da Caixa de Assistência, sempre em prol da ampliação das coberturas e da qualificação do atendimento prestado aos beneficiários.
          </p>
          <p>
            Na ANABB, já liderei os setores Administrativo e Financeiro, de Relações com os Funcionários do BB e as antigas áreas de Aposentadoria e Previdência. No Instituto Viva Cidadania – que viabiliza o apoio financeiro da Associação a projetos sociais em todas as regiões do país – estive à frente das diretorias Financeira e de Projetos.
          </p>
          <p>
            No Banco do Brasil, fui uma das primeiras mulheres a ocupar cargos de chefia, exercendo diversos postos de gerência e tornando-me a terceira mulher a assumir a função de superintendente regional da instituição no país. Ao longo da minha trajetória, sempre me pautei pela igualdade de oportunidades e pela valorização da participação das mulheres nas entidades do funcionalismo e em cargos de gestão do Banco.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
